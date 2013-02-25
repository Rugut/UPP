
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	///<summary>
	///(Регл)
	///</summary>
	[DataContract]
	public enum ОтражениеВУСН
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"52e18cff-90de-430a-b9c6-89a0501b1be2\", \"Представление\":\"Принимаются\"}")]
		Принимаются = 0,
		[EnumMember(Value = "{\"Ссылка\":\"633bc00c-0476-49f4-b17b-4da61508f89a\", \"Представление\":\"НеПринимаются\"}")]
		НеПринимаются = 1,//Не принимаются
		[EnumMember(Value = "{\"Ссылка\":\"1dd8919c-9063-4bdb-b8a0-13f8a4232cb8\", \"Представление\":\"Распределяются\"}")]
		Распределяются = 2,
	}
	public static partial class ОтражениеВУСН_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Принимаются = new Guid("a089c6b9-1b50-e21b-430a-90de52e18cff");
		public static readonly Guid НеПринимаются = new Guid("a64d7bb1-0815-9af8-49f4-0476633bc00c");//Не принимаются
		public static readonly Guid Распределяются = new Guid("f813a0b8-23a4-b82c-4bdb-90631dd8919c");
		public static ОтражениеВУСН Получить(this ОтражениеВУСН Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ОтражениеВУСН Получить(this ОтражениеВУСН Значение, Guid Ссылка)
		{
			if(Ссылка == Принимаются)
			{
				return ОтражениеВУСН.Принимаются;
			}
			else if(Ссылка == НеПринимаются)
			{
				return ОтражениеВУСН.НеПринимаются;
			}
			else if(Ссылка == Распределяются)
			{
				return ОтражениеВУСН.Распределяются;
			}
			return ОтражениеВУСН.ПустаяСсылка;
		}
		public static byte[] Ключ(this ОтражениеВУСН Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ОтражениеВУСН Значение)
		{
			switch (Значение)
			{
				case ОтражениеВУСН.Принимаются: return Принимаются;
				case ОтражениеВУСН.НеПринимаются: return НеПринимаются;
				case ОтражениеВУСН.Распределяются: return Распределяются;
			}
			return Guid.Empty;
		}
	}
}