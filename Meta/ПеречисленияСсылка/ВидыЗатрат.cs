
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
	public enum ВидыЗатрат
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"d644a70d-49cc-4164-9e07-7fea53aac5e8\", \"Представление\":\"Материальные\"}")]
		Материальные = 0,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"33d1484e-99eb-4286-9cd6-3bdf1bc86270\", \"Представление\":\"ОплатаТруда\"}")]
		ОплатаТруда = 1,//Оплата труда
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"5b5cc841-6717-4601-bb3c-f94d58540079\", \"Представление\":\"Амортизация\"}")]
		Амортизация = 2,
	///<summary>
	///(Общ)
	///</summary>
		[EnumMember(Value = "{\"Ссылка\":\"eada8cc2-d6dd-49bc-8623-c7d05728963a\", \"Представление\":\"Прочие\"}")]
		Прочие = 3,
	}
	public static partial class ВидыЗатрат_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Материальные = new Guid("ea7f079e-aa53-e8c5-4164-49ccd644a70d");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid ОплатаТруда = new Guid("df3bd69c-c81b-7062-4286-99eb33d1484e");//Оплата труда
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Амортизация = new Guid("4df93cbb-5458-7900-4601-67175b5cc841");
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid Прочие = new Guid("d0c72386-2857-3a96-49bc-d6ddeada8cc2");
		public static ВидыЗатрат Получить(this ВидыЗатрат Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыЗатрат Получить(this ВидыЗатрат Значение, Guid Ссылка)
		{
			if(Ссылка == Материальные)
			{
				return ВидыЗатрат.Материальные;
			}
			else if(Ссылка == ОплатаТруда)
			{
				return ВидыЗатрат.ОплатаТруда;
			}
			else if(Ссылка == Амортизация)
			{
				return ВидыЗатрат.Амортизация;
			}
			else if(Ссылка == Прочие)
			{
				return ВидыЗатрат.Прочие;
			}
			return ВидыЗатрат.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыЗатрат Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыЗатрат Значение)
		{
			switch (Значение)
			{
				case ВидыЗатрат.Материальные: return Материальные;
				case ВидыЗатрат.ОплатаТруда: return ОплатаТруда;
				case ВидыЗатрат.Амортизация: return Амортизация;
				case ВидыЗатрат.Прочие: return Прочие;
			}
			return Guid.Empty;
		}
	}
}