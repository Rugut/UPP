
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
	public partial class ПакетЭД:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("3d5fcdbd-7505-4bb4-87a1-fc7de4905aa0");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012002.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.Перечисления/*Ссылка*/.НаправленияЭД Направление {get;set;}
		public string/*(80)*/ Получатель {get;set;}
		public string/*(80)*/ Отправитель {get;set;}
		public bool ДанныеЗашифрованы {get;set;}//Данные зашифрованы
		public object АдресРесурсаОрганизации {get;set;}//Адрес ресурса организации
		public string/*(200)*/ АдресРесурсаКонтрагента {get;set;}//Адрес ресурса контрагента
		public string/*(100)*/ СертификатШифрования {get;set;}//Сертификат шифрования
		public V82.СправочникиСсылка.СоглашенияОбИспользованииЭД Соглашение {get;set;}
		public V82.Перечисления/*Ссылка*/.СтатусыПакетовЭД СтатусПакета {get;set;}//Статус пакета
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.Перечисления/*Ссылка*/.СпособыОбменаЭД СпособОбменаЭД {get;set;}//Способ обмена
		public string/*(0)*/ Комментарий {get;set;}
		public string/*(80)*/ ВнешнийУИД {get;set;}//Внешний уникальный идентификатор
		
		public ПакетЭД()
		{
		}
		
		public ПакетЭД(byte[] УникальныйИдентификатор)
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
					,_Fld24715RRef [Направление]
					,_Fld24716 [Получатель]
					,_Fld24717 [Отправитель]
					,_Fld24718 [ДанныеЗашифрованы]
					,_Fld24719_TYPE [АдресРесурсаОрганизации_Тип],_Fld24719_RRRef [АдресРесурсаОрганизации],_Fld24719_RTRef [АдресРесурсаОрганизации_Вид]
					,_Fld24720 [АдресРесурсаКонтрагента]
					,_Fld24721 [СертификатШифрования]
					,_Fld24722RRef [Соглашение]
					,_Fld24723RRef [СтатусПакета]
					,_Fld24724RRef [Контрагент]
					,_Fld24725RRef [Организация]
					,_Fld24726RRef [СпособОбменаЭД]
					,_Fld24727 [Комментарий]
					,_Fld24728 [ВнешнийУИД]
					From _Document23158(NOLOCK)
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
							Направление = V82.Перечисления/*Ссылка*/.НаправленияЭД.ПустаяСсылка.Получить((byte[])Читалка.GetValue(4));
							Получатель = Читалка.GetString(5);
							Отправитель = Читалка.GetString(6);
							ДанныеЗашифрованы = ((byte[])Читалка.GetValue(7))[0]==1;
							АдресРесурсаКонтрагента = Читалка.GetString(11);
							СертификатШифрования = Читалка.GetString(12);
							СтатусПакета = V82.Перечисления/*Ссылка*/.СтатусыПакетовЭД.ПустаяСсылка.Получить((byte[])Читалка.GetValue(14));
							СпособОбменаЭД = V82.Перечисления/*Ссылка*/.СпособыОбменаЭД.ПустаяСсылка.Получить((byte[])Читалка.GetValue(17));
							Комментарий = Читалка.GetString(18);
							ВнешнийУИД = Читалка.GetString(19);
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
		
		public V82.ДокументыОбъект.ПакетЭД  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ПакетЭД();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Направление = Направление;
			Объект.Получатель = Получатель;
			Объект.Отправитель = Отправитель;
			Объект.ДанныеЗашифрованы = ДанныеЗашифрованы;
			Объект.АдресРесурсаОрганизации = АдресРесурсаОрганизации;
			Объект.АдресРесурсаКонтрагента = АдресРесурсаКонтрагента;
			Объект.СертификатШифрования = СертификатШифрования;
			Объект.Соглашение = Соглашение;
			Объект.СтатусПакета = СтатусПакета;
			Объект.Контрагент = Контрагент;
			Объект.Организация = Организация;
			Объект.СпособОбменаЭД = СпособОбменаЭД;
			Объект.Комментарий = Комментарий;
			Объект.ВнешнийУИД = ВнешнийУИД;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ПакетЭД ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ПакетЭД)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ПакетЭД(УникальныйИдентификатор);
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