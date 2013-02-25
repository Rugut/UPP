
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Упр)
	///</summary>
	[DataContract]
	public enum ПорядкиОкругления
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"eb0a7cac-7e91-4e78-bc08-89dcdcc3d87c\", \"Представление\":\"Окр0_01\"}")]
		Окр0_01 = 0,//0.01
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"81b2be88-181c-4435-8d55-e4dc35535b1b\", \"Представление\":\"Окр0_05\"}")]
		Окр0_05 = 1,//0.05
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"f5a56fab-3bfe-439b-86da-326f1bcdd402\", \"Представление\":\"Окр0_1\"}")]
		Окр0_1 = 2,//0.1
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"146c5750-ba58-4d59-ab72-5462268358f1\", \"Представление\":\"Окр0_5\"}")]
		Окр0_5 = 3,//0.5
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"0b7cc695-997f-4ec5-9b4f-1e3be383d27f\", \"Представление\":\"Окр1\"}")]
		Окр1 = 4,//1
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"3b107c6f-fb60-4a68-9d91-1a8dfd10828e\", \"Представление\":\"Окр5\"}")]
		Окр5 = 5,//5
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"37ab1335-0e10-4aaf-935b-0948cdff434a\", \"Представление\":\"Окр10\"}")]
		Окр10 = 6,//10
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"e698c574-a383-48cc-8d02-3ee19ff75797\", \"Представление\":\"Окр50\"}")]
		Окр50 = 7,//50
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"7c82fb0c-5d71-453f-8c7b-c025cc928f96\", \"Представление\":\"Окр100\"}")]
		Окр100 = 8,//100
	}
	public static partial class ПорядкиОкругления_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр0_01 = new Guid("dc8908bc-c3dc-7cd8-4e78-7e91eb0a7cac");//0.01
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр0_05 = new Guid("dce4558d-5335-1b5b-4435-181c81b2be88");//0.05
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр0_1 = new Guid("6f32da86-cd1b-02d4-439b-3bfef5a56fab");//0.1
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр0_5 = new Guid("625472ab-8326-f158-4d59-ba58146c5750");//0.5
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр1 = new Guid("3b1e4f9b-83e3-7fd2-4ec5-997f0b7cc695");//1
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр5 = new Guid("8d1a919d-10fd-8e82-4a68-fb603b107c6f");//5
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр10 = new Guid("48095b93-ffcd-4a43-4aaf-0e1037ab1335");//10
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр50 = new Guid("e13e028d-f79f-9757-48cc-a383e698c574");//50
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Окр100 = new Guid("25c07b8c-92cc-968f-453f-5d717c82fb0c");//100
		public static ПорядкиОкругления Получить(this ПорядкиОкругления Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ПорядкиОкругления Получить(this ПорядкиОкругления Значение, Guid Ссылка)
		{
			if(Ссылка == Окр0_01)
			{
				return ПорядкиОкругления.Окр0_01;
			}
			else if(Ссылка == Окр0_05)
			{
				return ПорядкиОкругления.Окр0_05;
			}
			else if(Ссылка == Окр0_1)
			{
				return ПорядкиОкругления.Окр0_1;
			}
			else if(Ссылка == Окр0_5)
			{
				return ПорядкиОкругления.Окр0_5;
			}
			else if(Ссылка == Окр1)
			{
				return ПорядкиОкругления.Окр1;
			}
			else if(Ссылка == Окр5)
			{
				return ПорядкиОкругления.Окр5;
			}
			else if(Ссылка == Окр10)
			{
				return ПорядкиОкругления.Окр10;
			}
			else if(Ссылка == Окр50)
			{
				return ПорядкиОкругления.Окр50;
			}
			else if(Ссылка == Окр100)
			{
				return ПорядкиОкругления.Окр100;
			}
			return ПорядкиОкругления.ПустаяСсылка;
		}
		public static byte[] Ключ(this ПорядкиОкругления Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ПорядкиОкругления Значение)
		{
			switch (Значение)
			{
				case ПорядкиОкругления.Окр0_01: return Окр0_01;
				case ПорядкиОкругления.Окр0_05: return Окр0_05;
				case ПорядкиОкругления.Окр0_1: return Окр0_1;
				case ПорядкиОкругления.Окр0_5: return Окр0_5;
				case ПорядкиОкругления.Окр1: return Окр1;
				case ПорядкиОкругления.Окр5: return Окр5;
				case ПорядкиОкругления.Окр10: return Окр10;
				case ПорядкиОкругления.Окр50: return Окр50;
				case ПорядкиОкругления.Окр100: return Окр100;
			}
			return Guid.Empty;
		}
	}
}