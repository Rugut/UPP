
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class ПланДвиженияДенежныхСредств:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("5793c102-4713-4760-b35b-c171361663df");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191230.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		public DateTime ДатаПланирования {get;set;}//Дата планирования
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		public V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств ВидДенежныхСредств {get;set;}//Вид денежных средств
		
		public ПланДвиженияДенежныхСредств()
		{
		}
		
		public ПланДвиженияДенежныхСредств(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Number [Номер]
					,_Fld12721RRef [Сценарий]
					,_Fld12722RRef [ВалютаДокумента]
					,_Fld12723 [ДатаПланирования]
					,_Fld12724 [Комментарий]
					,_Fld12725 [КратностьДокумента]
					,_Fld12726 [КурсДокумента]
					,_Fld12727RRef [Ответственный]
					,_Fld12728RRef [Подразделение]
					,_Fld12729RRef [ВидДенежныхСредств]
					From _Document506(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Номер = Читалка.GetString(3);
							ДатаПланирования = Читалка.GetDateTime(6);
							Комментарий = Читалка.GetString(7);
							КратностьДокумента = Читалка.GetDecimal(8);
							КурсДокумента = Читалка.GetDecimal(9);
							ВидДенежныхСредств = V82.Перечисления/*Ссылка*/.ВидыДенежныхСредств.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.ДокументыОбъект.ПланДвиженияДенежныхСредств  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПланДвиженияДенежныхСредств();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Сценарий = Сценарий;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.ДатаПланирования = ДатаПланирования;
			Объект.Комментарий = Комментарий;
			Объект.КратностьДокумента = КратностьДокумента;
			Объект.КурсДокумента = КурсДокумента;
			Объект.Ответственный = Ответственный;
			Объект.Подразделение = Подразделение;
			Объект.ВидДенежныхСредств = ВидДенежныхСредств;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПланДвиженияДенежныхСредств ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПланДвиженияДенежныхСредств)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПланДвиженияДенежныхСредств(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
		}
		
		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}
		
		public string СериализацияJson()
		{
			return this.ToJson();
		}
		
		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}