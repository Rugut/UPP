
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
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class Вакансии:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("d0debbba-ea58-4d38-a33e-ccb725472a19");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191634.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool Предопределенный {get;set;}
		public string/*9*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		public bool Закрыта {get;set;}//Вакансия закрыта
		public V82.СправочникиСсылка.Должности Должность {get;set;}
		public V82.СправочникиСсылка.Пользователи Заявитель {get;set;}
		public string/*(0)*/ Обязанности {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}//Ответственный за вакансию
		public DateTime ПлановаяДатаЗакрытия {get;set;}//Плановая дата закрытия
		public object Подразделение {get;set;}
		public string/*(0)*/ Требования {get;set;}
		public string/*(0)*/ Условия {get;set;}
		public DateTime ДатаОткрытия {get;set;}//Дата открытия
		public DateTime ДатаЗакрытия {get;set;}//Дата закрытия
		
		public Вакансии()
		{
		}
		
		public Вакансии(byte[] УникальныйИдентификатор)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld1872 [Закрыта]
					,_Fld1873RRef [Должность]
					,_Fld1874RRef [Заявитель]
					,_Fld1875 [Обязанности]
					,_Fld1876RRef [Организация]
					,_Fld1877RRef [Ответственный]
					,_Fld1878 [ПлановаяДатаЗакрытия]
					,_Fld1879_TYPE [Подразделение_Тип],_Fld1879_RRRef [Подразделение],_Fld1879_RTRef [Подразделение_Вид]
					,_Fld1880 [Требования]
					,_Fld1881 [Условия]
					,_Fld1882 [ДатаОткрытия]
					,_Fld1883 [ДатаЗакрытия]
					From _Reference39(NOLOCK)
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
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
							Закрыта = ((byte[])Читалка.GetValue(6))[0]==1;
							Должность = new V82.СправочникиСсылка.Должности((byte[])Читалка.GetValue(7));
							Заявитель = new V82.СправочникиСсылка.Пользователи((byte[])Читалка.GetValue(8));
							Обязанности = Читалка.GetString(9);
							Организация = new V82.СправочникиСсылка.Организации((byte[])Читалка.GetValue(10));
							Ответственный = new V82.СправочникиСсылка.Пользователи((byte[])Читалка.GetValue(11));
							ПлановаяДатаЗакрытия = Читалка.GetDateTime(12);
							Требования = Читалка.GetString(16);
							Условия = Читалка.GetString(17);
							ДатаОткрытия = Читалка.GetDateTime(18);
							ДатаЗакрытия = Читалка.GetDateTime(19);
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
		
		public V82.СправочникиОбъект.Вакансии  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.Вакансии();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Закрыта = Закрыта;
			Объект.Должность = Должность;
			Объект.Заявитель = Заявитель;
			Объект.Обязанности = Обязанности;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.ПлановаяДатаЗакрытия = ПлановаяДатаЗакрытия;
			Объект.Подразделение = Подразделение;
			Объект.Требования = Требования;
			Объект.Условия = Условия;
			Объект.ДатаОткрытия = ДатаОткрытия;
			Объект.ДатаЗакрытия = ДатаЗакрытия;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.Вакансии ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.Вакансии)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.Вакансии(УникальныйИдентификатор);
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