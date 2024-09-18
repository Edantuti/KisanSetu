export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Buyers: {
        Row: {
          address: string
          created_at: string
          district: string
          email: string
          gstin: string
          id: string
          name: string
          pincode: string
          state: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          address: string
          created_at?: string
          district: string
          email: string
          gstin: string
          id: string
          name?: string
          pincode: string
          state: string
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          address?: string
          created_at?: string
          district?: string
          email?: string
          gstin?: string
          id?: string
          name?: string
          pincode?: string
          state?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Buyers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Buyers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["userid"]
          },
        ]
      }
      Chat: {
        Row: {
          created_at: string
          from: string
          id: string
          message: string
          to: string
        }
        Insert: {
          created_at?: string
          from: string
          id?: string
          message: string
          to: string
        }
        Update: {
          created_at?: string
          from?: string
          id?: string
          message?: string
          to?: string
        }
        Relationships: [
          {
            foreignKeyName: "Chat_from_fkey"
            columns: ["from"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userid"]
          },
          {
            foreignKeyName: "Chat_to_fkey"
            columns: ["to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userid"]
          },
        ]
      }
      Clauses: {
        Row: {
          contract_id: string | null
          created_at: string | null
          description: string | null
          id: string
          type: string | null
          updated_at: string | null
        }
        Insert: {
          contract_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          contract_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Clauses_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "Contract"
            referencedColumns: ["id"]
          },
        ]
      }
      Community: {
        Row: {
          contract_id: string | null
          created_at: string | null
          description: string | null
          id: string
          name: string | null
          updated_at: string | null
        }
        Insert: {
          contract_id?: string | null
          created_at?: string | null
          description?: string | null
          id: string
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          contract_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Community_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "Contract"
            referencedColumns: ["id"]
          },
        ]
      }
      CommunityFarmer: {
        Row: {
          area: number | null
          community_id: string | null
          crop: string | null
          farmer_id: string | null
        }
        Insert: {
          area?: number | null
          community_id?: string | null
          crop?: string | null
          farmer_id?: string | null
        }
        Update: {
          area?: number | null
          community_id?: string | null
          crop?: string | null
          farmer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CommunityFarmer_community_id_fkey"
            columns: ["community_id"]
            isOneToOne: false
            referencedRelation: "Community"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CommunityFarmer_farmer_id_fkey"
            columns: ["farmer_id"]
            isOneToOne: false
            referencedRelation: "Farmer"
            referencedColumns: ["id"]
          },
        ]
      }
      Contract: {
        Row: {
          buyer_photo: string | null
          company_id: string
          created_at: string
          description: string
          end_date: string
          farmer_photo: string | null
          id: string
          name: string
          payment_terms: string | null
          performance_criteria: string | null
          representative: string
          sealing_date: string
          start_date: string
          status: string | null
          total_value: number | null
          updated_at: string
        }
        Insert: {
          buyer_photo?: string | null
          company_id: string
          created_at?: string
          description?: string
          end_date: string
          farmer_photo?: string | null
          id?: string
          name?: string
          payment_terms?: string | null
          performance_criteria?: string | null
          representative?: string
          sealing_date: string
          start_date: string
          status?: string | null
          total_value?: number | null
          updated_at?: string
        }
        Update: {
          buyer_photo?: string | null
          company_id?: string
          created_at?: string
          description?: string
          end_date?: string
          farmer_photo?: string | null
          id?: string
          name?: string
          payment_terms?: string | null
          performance_criteria?: string | null
          representative?: string
          sealing_date?: string
          start_date?: string
          status?: string | null
          total_value?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Contract_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "Buyers"
            referencedColumns: ["user_id"]
          },
        ]
      }
      ContractFarmer: {
        Row: {
          area: number | null
          contract_id: string
          crop: string | null
          farmer_id: string
          metric: number
          quantity: number | null
        }
        Insert: {
          area?: number | null
          contract_id: string
          crop?: string | null
          farmer_id: string
          metric: number
          quantity?: number | null
        }
        Update: {
          area?: number | null
          contract_id?: string
          crop?: string | null
          farmer_id?: string
          metric?: number
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ContractFarmer_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "Contract"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ContractFarmer_farmer_id_fkey"
            columns: ["farmer_id"]
            isOneToOne: false
            referencedRelation: "Farmer"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ContractFarmer_metric_fkey"
            columns: ["metric"]
            isOneToOne: false
            referencedRelation: "Metrics"
            referencedColumns: ["id"]
          },
        ]
      }
      ContractTransportation: {
        Row: {
          contract_id: string | null
          crop_quantity: number | null
          id: string
          transport_end_date: string | null
          transport_start_date: string | null
          transportation_entity_id: string | null
        }
        Insert: {
          contract_id?: string | null
          crop_quantity?: number | null
          id: string
          transport_end_date?: string | null
          transport_start_date?: string | null
          transportation_entity_id?: string | null
        }
        Update: {
          contract_id?: string | null
          crop_quantity?: number | null
          id?: string
          transport_end_date?: string | null
          transport_start_date?: string | null
          transportation_entity_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ContractTransportation_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "Contract"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ContractTransportation_transportation_entity_id_fkey"
            columns: ["transportation_entity_id"]
            isOneToOne: false
            referencedRelation: "TransportationEntity"
            referencedColumns: ["id"]
          },
        ]
      }
      Farm: {
        Row: {
          area: number | null
          created_at: string
          crop_rotation: boolean | null
          current_crop: string | null
          farm_equipment: string | null
          farmer_id: string | null
          id: string
          irrigation: boolean | null
          irrigation_type: string | null
          lat: number | null
          long: number | null
          organic_certified: boolean | null
          pest_control: string | null
          previous_crop: string | null
          soil_type: string | null
          updated_at: string
          water_source: string | null
        }
        Insert: {
          area?: number | null
          created_at?: string
          crop_rotation?: boolean | null
          current_crop?: string | null
          farm_equipment?: string | null
          farmer_id?: string | null
          id: string
          irrigation?: boolean | null
          irrigation_type?: string | null
          lat?: number | null
          long?: number | null
          organic_certified?: boolean | null
          pest_control?: string | null
          previous_crop?: string | null
          soil_type?: string | null
          updated_at?: string
          water_source?: string | null
        }
        Update: {
          area?: number | null
          created_at?: string
          crop_rotation?: boolean | null
          current_crop?: string | null
          farm_equipment?: string | null
          farmer_id?: string | null
          id?: string
          irrigation?: boolean | null
          irrigation_type?: string | null
          lat?: number | null
          long?: number | null
          organic_certified?: boolean | null
          pest_control?: string | null
          previous_crop?: string | null
          soil_type?: string | null
          updated_at?: string
          water_source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Farm_farmer_id_fkey"
            columns: ["farmer_id"]
            isOneToOne: false
            referencedRelation: "Farmer"
            referencedColumns: ["user_id"]
          },
        ]
      }
      Farmer: {
        Row: {
          aadhar_number: string | null
          created_at: string | null
          date_of_birth: string | null
          father_name: string
          id: string
          name: string
          phone_number: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          aadhar_number?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          father_name: string
          id: string
          name: string
          phone_number?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          aadhar_number?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          father_name?: string
          id?: string
          name?: string
          phone_number?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Farmer_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Farmer_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["userid"]
          },
        ]
      }
      FarmStorage: {
        Row: {
          farm_id: string | null
          id: string
          storage_end_date: string | null
          storage_entity_id: string | null
          storage_start_date: string | null
        }
        Insert: {
          farm_id?: string | null
          id: string
          storage_end_date?: string | null
          storage_entity_id?: string | null
          storage_start_date?: string | null
        }
        Update: {
          farm_id?: string | null
          id?: string
          storage_end_date?: string | null
          storage_entity_id?: string | null
          storage_start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FarmStorage_farm_id_fkey"
            columns: ["farm_id"]
            isOneToOne: false
            referencedRelation: "Farm"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FarmStorage_storage_entity_id_fkey"
            columns: ["storage_entity_id"]
            isOneToOne: false
            referencedRelation: "StorageEntity"
            referencedColumns: ["id"]
          },
        ]
      }
      Metrics: {
        Row: {
          created_at: string
          id: number
          type: string
          unit: string
        }
        Insert: {
          created_at?: string
          id?: number
          type: string
          unit: string
        }
        Update: {
          created_at?: string
          id?: number
          type?: string
          unit?: string
        }
        Relationships: []
      }
      MonitorClauses: {
        Row: {
          clauses_id: string
          contractor: boolean
          contractor_marked: string | null
          farmer: boolean
          farmer_marked: string | null
          id: string
        }
        Insert: {
          clauses_id: string
          contractor?: boolean
          contractor_marked?: string | null
          farmer?: boolean
          farmer_marked?: string | null
          id?: string
        }
        Update: {
          clauses_id?: string
          contractor?: boolean
          contractor_marked?: string | null
          farmer?: boolean
          farmer_marked?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "MonitorClauses_clauses_id_fkey"
            columns: ["clauses_id"]
            isOneToOne: false
            referencedRelation: "Clauses"
            referencedColumns: ["id"]
          },
        ]
      }
      Request: {
        Row: {
          buyer_id: string
          created_at: string
          farmer_id: string
          id: string
        }
        Insert: {
          buyer_id: string
          created_at?: string
          farmer_id: string
          id?: string
        }
        Update: {
          buyer_id?: string
          created_at?: string
          farmer_id?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Request_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "Buyers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Request_farmer_id_fkey"
            columns: ["farmer_id"]
            isOneToOne: false
            referencedRelation: "Farmer"
            referencedColumns: ["id"]
          },
        ]
      }
      Sentiment: {
        Row: {
          clauses_id: string
          contract_id: string
          created_at: string
          id: string
          sentiment: boolean
          simplified_text: string
        }
        Insert: {
          clauses_id: string
          contract_id: string
          created_at?: string
          id?: string
          sentiment?: boolean
          simplified_text?: string
        }
        Update: {
          clauses_id?: string
          contract_id?: string
          created_at?: string
          id?: string
          sentiment?: boolean
          simplified_text?: string
        }
        Relationships: [
          {
            foreignKeyName: "Sentiment_clauses_id_fkey"
            columns: ["clauses_id"]
            isOneToOne: false
            referencedRelation: "Clauses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Sentiment_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "Contract"
            referencedColumns: ["id"]
          },
        ]
      }
      StorageEntity: {
        Row: {
          capacity: number | null
          id: string
          location: string | null
          name: string | null
          type: string | null
        }
        Insert: {
          capacity?: number | null
          id: string
          location?: string | null
          name?: string | null
          type?: string | null
        }
        Update: {
          capacity?: number | null
          id?: string
          location?: string | null
          name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      TransportationEntity: {
        Row: {
          capacity: number | null
          id: string
          location: string | null
          name: string | null
          vehicle_type: string | null
        }
        Insert: {
          capacity?: number | null
          id: string
          location?: string | null
          name?: string | null
          vehicle_type?: string | null
        }
        Update: {
          capacity?: number | null
          id?: string
          location?: string | null
          name?: string | null
          vehicle_type?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          id: string
          name: string
          status: Database["public"]["Enums"]["status"]
          userid: string
        }
        Insert: {
          created_at?: string
          id: string
          name?: string
          status?: Database["public"]["Enums"]["status"]
          userid?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          status?: Database["public"]["Enums"]["status"]
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      status: "farmer" | "buyer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
