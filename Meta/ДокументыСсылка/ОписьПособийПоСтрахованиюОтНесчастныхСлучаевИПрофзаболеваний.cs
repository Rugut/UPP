
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
	public partial class ОписьПособийПоСтрахованиюОтНесчастныхСлучаевИПрофзаболеваний:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("c6dc2a96-74e0-461e-b527-f5f24aa1bbb7");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012019.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		///(Общ)
		///</summary>
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public string/*(135)*/ НаименованиеТерриториальногоОрганаФСС {get;set;}//Наименование территориального органа ФСС
		public string/*(14)*/ РегистрационныйНомерФСС {get;set;}//Регистрационный номер ФСС
		public string/*(14)*/ ДополнительныйКодФСС {get;set;}//Дополнительный код ФСС
		public string/*(5)*/ КодПодчиненностиФСС {get;set;}//Код подчиненности ФСС
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public string/*(12)*/ ИНН {get;set;}
		public string/*(9)*/ КПП {get;set;}
		public string/*(30)*/ ТелефонСоставителя {get;set;}//Телефон составителя
		
		public ОписьПособийПоСтрахованиюОтНесчастныхСлучаевИПрофзаболеваний()
		{
		}
		
		public ОписьПособийПоСтрахованиюОтНесчастныхСлучаевИПрофзаболеваний(byte[] УникальныйИдентификатор)
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
					,_Fld24677RRef [Организация]
					,_Fld24678RRef [Ответственный]
					,_Fld24679 [Комментарий]
					,_Fld24680 [НаименованиеТерриториальногоОрганаФСС]
					,_Fld24681 [РегистрационныйНомерФСС]
					,_Fld24682 [ДополнительныйКодФСС]
					,_Fld24683 [КодПодчиненностиФСС]
					,_Fld24684RRef [Руководитель]
					,_Fld24685RRef [ДолжностьРуководителя]
					,_Fld24686 [КраткийСоставДокумента]
					,_Fld24687 [ИНН]
					,_Fld24688 [КПП]
					,_Fld24689 [ТелефонСоставителя]
					From _Document23156(NOLOCK)
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
							Комментарий = Читалка.GetString(6);
							НаименованиеТерриториальногоОрганаФСС = Читалка.GetString(7);
							РегистрационныйНомерФСС = Читалка.GetString(8);
							ДополнительныйКодФСС = Читалка.GetString(9);
							КодПодчиненностиФСС = Читалка.GetString(10);
							КраткийСоставДокумента = Читалка.GetString(13);
							ИНН = Читалка.GetString(14);
							КПП = Читалка.GetString(15);
							ТелефонСоставителя = Читалка.GetString(16);
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
		
		public V82.ДокументыОбъект.ОписьПособийПоСтрахованиюОтНесчастныхСлучаевИПрофзаболеваний  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.ОписьПособийПоСтрахованиюОтНесчастныхСлучаевИПрофзаболеваний();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.НаименованиеТерриториальногоОрганаФСС = НаименованиеТерриториальногоОрганаФСС;
			Объект.РегистрационныйНомерФСС = РегистрационныйНомерФСС;
			Объект.ДополнительныйКодФСС = ДополнительныйКодФСС;
			Объект.КодПодчиненностиФСС = КодПодчиненностиФСС;
			Объект.Руководитель = Руководитель;
			Объект.ДолжностьРуководителя = ДолжностьРуководителя;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ИНН = ИНН;
			Объект.КПП = КПП;
			Объект.ТелефонСоставителя = ТелефонСоставителя;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.ОписьПособийПоСтрахованиюОтНесчастныхСлучаевИПрофзаболеваний ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.ОписьПособийПоСтрахованиюОтНесчастныхСлучаевИПрофзаболеваний)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.ОписьПособийПоСтрахованиюОтНесчастныхСлучаевИПрофзаболеваний(УникальныйИдентификатор);
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