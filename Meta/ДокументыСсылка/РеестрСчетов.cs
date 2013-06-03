
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
	public partial class РеестрСчетов:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d12e5496-29e0-4094-8d79-7d934b96476a");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191220.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Банки ИсполняющийБанк {get;set;}//Исполняющий банк
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Расчетный счет организации
		///</summary>
		public V82.СправочникиСсылка.БанковскиеСчета СчетОрганизации {get;set;}//Расчетный счет организации
		///<summary>
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		///<summary>
		///Расчетный счет контрагента
		///</summary>
		public V82.СправочникиСсылка.БанковскиеСчета СчетКонтрагента {get;set;}//Расчетный счет контрагента
		public string/*(10)*/ НомерАккредитива {get;set;}//Номер аккредитива
		public DateTime ДатаАккредитива {get;set;}//Дата аккредитива
		public decimal/*(15.2)*/ СуммаАккредитива {get;set;}//Сумма аккредитива
		///<summary>
		///Дата закрытия аккредитива
		///</summary>
		public DateTime ДатаЗакрытия {get;set;}//Дата закрытия
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public V82.ДокументыСсылка.АккредитивПереданный ДокументОснование {get;set;}//Документ основание
		
		public РеестрСчетов()
		{
		}
		
		public РеестрСчетов(byte[] УникальныйИдентификатор)
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
					,_Fld16658RRef [ИсполняющийБанк]
					,_Fld16659RRef [Организация]
					,_Fld16660RRef [СчетОрганизации]
					,_Fld16661RRef [Контрагент]
					,_Fld16662RRef [СчетКонтрагента]
					,_Fld16663 [НомерАккредитива]
					,_Fld16664 [ДатаАккредитива]
					,_Fld16665 [СуммаАккредитива]
					,_Fld16666 [ДатаЗакрытия]
					,_Fld16667 [Комментарий]
					,_Fld16668RRef [Ответственный]
					,_Fld16669RRef [ДокументОснование]
					From _Document577(NOLOCK)
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
							НомерАккредитива = Читалка.GetString(9);
							ДатаАккредитива = Читалка.GetDateTime(10);
							СуммаАккредитива = Читалка.GetDecimal(11);
							ДатаЗакрытия = Читалка.GetDateTime(12);
							Комментарий = Читалка.GetString(13);
							ДокументОснование = new V82.ДокументыСсылка.АккредитивПереданный((byte[])Читалка.GetValue(15));
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
		
		public V82.ДокументыОбъект.РеестрСчетов  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.РеестрСчетов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.ИсполняющийБанк = ИсполняющийБанк;
			Объект.Организация = Организация;
			Объект.СчетОрганизации = СчетОрганизации;
			Объект.Контрагент = Контрагент;
			Объект.СчетКонтрагента = СчетКонтрагента;
			Объект.НомерАккредитива = НомерАккредитива;
			Объект.ДатаАккредитива = ДатаАккредитива;
			Объект.СуммаАккредитива = СуммаАккредитива;
			Объект.ДатаЗакрытия = ДатаЗакрытия;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ДокументОснование = ДокументОснование;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.РеестрСчетов ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.РеестрСчетов)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.РеестрСчетов(УникальныйИдентификатор);
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