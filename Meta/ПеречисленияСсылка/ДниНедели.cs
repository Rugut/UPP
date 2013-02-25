
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Общ)
	///</summary>
	[DataContract]
	public enum ДниНедели
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"599aab3e-db35-4d2b-abaf-3318ec2e297b\", \"Представление\":\"Понедельник\"}")]
		Понедельник = 0,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"8b34b573-ef7a-4957-a651-c503e86041bc\", \"Представление\":\"Вторник\"}")]
		Вторник = 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"fa93ea82-2ce3-4955-86f5-91d746fa7c52\", \"Представление\":\"Среда\"}")]
		Среда = 2,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"a14338bd-99a1-4fe4-941d-5857e0e086e1\", \"Представление\":\"Четверг\"}")]
		Четверг = 3,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"7d9da492-1466-4427-826c-261acdff6f46\", \"Представление\":\"Пятница\"}")]
		Пятница = 4,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"abc607d9-bdc0-42dc-9ff1-e91aff3b75a8\", \"Представление\":\"Суббота\"}")]
		Суббота = 5,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"7a4039a9-72b4-4583-9e7f-3457ef02815e\", \"Представление\":\"Воскресенье\"}")]
		Воскресенье = 6,
	}
	public static partial class ДниНедели_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Понедельник = new Guid("1833afab-2eec-7b29-4d2b-db35599aab3e");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Вторник = new Guid("03c551a6-60e8-bc41-4957-ef7a8b34b573");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Среда = new Guid("d791f586-fa46-527c-4955-2ce3fa93ea82");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Четверг = new Guid("57581d94-e0e0-e186-4fe4-99a1a14338bd");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Пятница = new Guid("1a266c82-ffcd-466f-4427-14667d9da492");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Суббота = new Guid("1ae9f19f-3bff-a875-42dc-bdc0abc607d9");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Воскресенье = new Guid("57347f9e-02ef-5e81-4583-72b47a4039a9");
		public static ДниНедели Получить(this ДниНедели Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ДниНедели Получить(this ДниНедели Значение, Guid Ссылка)
		{
			if(Ссылка == Понедельник)
			{
				return ДниНедели.Понедельник;
			}
			else if(Ссылка == Вторник)
			{
				return ДниНедели.Вторник;
			}
			else if(Ссылка == Среда)
			{
				return ДниНедели.Среда;
			}
			else if(Ссылка == Четверг)
			{
				return ДниНедели.Четверг;
			}
			else if(Ссылка == Пятница)
			{
				return ДниНедели.Пятница;
			}
			else if(Ссылка == Суббота)
			{
				return ДниНедели.Суббота;
			}
			else if(Ссылка == Воскресенье)
			{
				return ДниНедели.Воскресенье;
			}
			return ДниНедели.ПустаяСсылка;
		}
		public static byte[] Ключ(this ДниНедели Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ДниНедели Значение)
		{
			switch (Значение)
			{
				case ДниНедели.Понедельник: return Понедельник;
				case ДниНедели.Вторник: return Вторник;
				case ДниНедели.Среда: return Среда;
				case ДниНедели.Четверг: return Четверг;
				case ДниНедели.Пятница: return Пятница;
				case ДниНедели.Суббота: return Суббота;
				case ДниНедели.Воскресенье: return Воскресенье;
			}
			return Guid.Empty;
		}
	}
}