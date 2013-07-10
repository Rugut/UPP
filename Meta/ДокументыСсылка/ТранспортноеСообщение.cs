
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
	public partial class ТранспортноеСообщение:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("0c2567b4-a7a0-45ad-bf02-b15cb7a65758");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011951.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.ЦиклыОбмена ЦиклОбмена {get;set;}//Цикл обмена
		public V82.Перечисления/*Ссылка*/.ТипыТранспортныхСообщений Тип {get;set;}
		public object Отправитель {get;set;}
		public object Получатель {get;set;}
		public V82.СправочникиСсылка.УчетныеЗаписиДокументооборота УчетнаяЗапись {get;set;}//Учетная запись
		public V82.Перечисления/*Ссылка*/.СтатусыПисем Статус {get;set;}
		public string/*(0)*/ Тема {get;set;}
		public string/*(0)*/ ТекстПисьма {get;set;}//Текст письма
		public string/*(255)*/ ИдентификаторСообщения {get;set;}//Идентификатор сообщения
		public DateTime ДатаТранспорта {get;set;}//Дата транспорта
		public decimal/*(1)*/ Важность {get;set;}
		public string/*(100)*/ Кодировка {get;set;}
		public string/*(255)*/ ОтКогоАдрес {get;set;}//От кого (адрес)
		public string/*(255)*/ ОтКогоПредставление {get;set;}//От кого (представление)
		public V82.ДокументыСсылка.ТранспортноеСообщение Основание {get;set;}
		public bool ПротоколСОшибкой {get;set;}//Протокол с ошибкой
		
		public ТранспортноеСообщение()
		{
		}
		
		public ТранспортноеСообщение(byte[] УникальныйИдентификатор)
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
					,_Fld25582RRef [ЦиклОбмена]
					,_Fld25583RRef [Тип]
					,_Fld25584_TYPE [Отправитель_Тип],_Fld25584_RRRef [Отправитель],_Fld25584_RTRef [Отправитель_Вид]
					,_Fld25585_TYPE [Получатель_Тип],_Fld25585_RRRef [Получатель],_Fld25585_RTRef [Получатель_Вид]
					,_Fld25586RRef [УчетнаяЗапись]
					,_Fld25587RRef [Статус]
					,_Fld25588 [Тема]
					,_Fld25589 [ТекстПисьма]
					,_Fld25590 [ИдентификаторСообщения]
					,_Fld25591 [ДатаТранспорта]
					,_Fld25592 [Важность]
					,_Fld25593 [Кодировка]
					,_Fld25594 [ОтКогоАдрес]
					,_Fld25595 [ОтКогоПредставление]
					,_Fld25596RRef [Основание]
					,_Fld25597 [ПротоколСОшибкой]
					From _Document23176(NOLOCK)
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
							Тип = V82.Перечисления/*Ссылка*/.ТипыТранспортныхСообщений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(4));
							Статус = V82.Перечисления/*Ссылка*/.СтатусыПисем.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							Тема = Читалка.GetString(13);
							ТекстПисьма = Читалка.GetString(14);
							ИдентификаторСообщения = Читалка.GetString(15);
							ДатаТранспорта = Читалка.GetDateTime(16);
							Важность = Читалка.GetDecimal(17);
							Кодировка = Читалка.GetString(18);
							ОтКогоАдрес = Читалка.GetString(19);
							ОтКогоПредставление = Читалка.GetString(20);
							Основание = new V82.ДокументыСсылка.ТранспортноеСообщение((byte[])Читалка.GetValue(21));
							ПротоколСОшибкой = ((byte[])Читалка.GetValue(22))[0]==1;
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
		
		public V82.ДокументыОбъект.ТранспортноеСообщение  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ТранспортноеСообщение();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.ЦиклОбмена = ЦиклОбмена;
			Объект.Тип = Тип;
			Объект.Отправитель = Отправитель;
			Объект.Получатель = Получатель;
			Объект.УчетнаяЗапись = УчетнаяЗапись;
			Объект.Статус = Статус;
			Объект.Тема = Тема;
			Объект.ТекстПисьма = ТекстПисьма;
			Объект.ИдентификаторСообщения = ИдентификаторСообщения;
			Объект.ДатаТранспорта = ДатаТранспорта;
			Объект.Важность = Важность;
			Объект.Кодировка = Кодировка;
			Объект.ОтКогоАдрес = ОтКогоАдрес;
			Объект.ОтКогоПредставление = ОтКогоПредставление;
			Объект.Основание = Основание;
			Объект.ПротоколСОшибкой = ПротоколСОшибкой;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ТранспортноеСообщение ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ТранспортноеСообщение)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ТранспортноеСообщение(УникальныйИдентификатор);
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