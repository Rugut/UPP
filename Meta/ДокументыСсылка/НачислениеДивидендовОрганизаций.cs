
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
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class НачислениеДивидендовОрганизаций:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("12a95072-f616-4d3d-b8be-08d75914ca93");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191330.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Суммы распределяемых дивидендов
		///</summary>
		public decimal/*(15.2)*/ ДивидендыНачисляемые {get;set;}//Дивиденды начисляемые
		public bool НаОднуАкцию {get;set;}//На одну акцию
		///<summary>
		///Суммы полученных организацией дивидендов (вычет по НДФЛ)
		///</summary>
		public decimal/*(15.2)*/ ДивидендыПолученные {get;set;}//Дивиденды полученные
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public DateTime ПериодРегистрации {get;set;}//Период регистрации
		public V82.ДокументыСсылка.НачислениеДивидендовОрганизаций ПерерассчитываемыйДокумент {get;set;}//Перерассчитываемый документ
		
		public НачислениеДивидендовОрганизаций()
		{
		}
		
		public НачислениеДивидендовОрганизаций(byte[] УникальныйИдентификатор)
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
					,_Fld9651RRef [Организация]
					,_Fld9652 [Комментарий]
					,_Fld9653RRef [Ответственный]
					,_Fld9654 [ДивидендыНачисляемые]
					,_Fld9655 [НаОднуАкцию]
					,_Fld9656 [ДивидендыПолученные]
					,_Fld9657 [КраткийСоставДокумента]
					,_Fld9658 [ПериодРегистрации]
					,_Fld9659RRef [ПерерассчитываемыйДокумент]
					From _Document434(NOLOCK)
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
							Комментарий = Читалка.GetString(5);
							ДивидендыНачисляемые = Читалка.GetDecimal(7);
							НаОднуАкцию = ((byte[])Читалка.GetValue(8))[0]==1;
							ДивидендыПолученные = Читалка.GetDecimal(9);
							КраткийСоставДокумента = Читалка.GetString(10);
							ПериодРегистрации = Читалка.GetDateTime(11);
							ПерерассчитываемыйДокумент = new V82.ДокументыСсылка.НачислениеДивидендовОрганизаций((byte[])Читалка.GetValue(12));
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
		
		public V82.ДокументыОбъект.НачислениеДивидендовОрганизаций  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.НачислениеДивидендовОрганизаций();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ДивидендыНачисляемые = ДивидендыНачисляемые;
			Объект.НаОднуАкцию = НаОднуАкцию;
			Объект.ДивидендыПолученные = ДивидендыПолученные;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ПериодРегистрации = ПериодРегистрации;
			Объект.ПерерассчитываемыйДокумент = ПерерассчитываемыйДокумент;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.НачислениеДивидендовОрганизаций ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.НачислениеДивидендовОрганизаций)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.НачислениеДивидендовОрганизаций(УникальныйИдентификатор);
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