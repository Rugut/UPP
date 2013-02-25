
using System;
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
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЗаявкиКандидатов:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("3ff0363c-a951-40b3-be59-e96e616dc47a");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191227.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		public V82.СправочникиСсылка.СостоянияЗаявокКандидатов Состояние {get;set;}//Текущее состояние
		public V82.Перечисления/*Ссылка*/.Важность Важность {get;set;}
		public string/*(0)*/ Комментарий {get;set;}//Описание кандидата
		public bool Закрыта {get;set;}//Работа по кандидату завершена
		public string/*(0)*/ РезультатЗакрытия {get;set;}//Результат работы по кандидату
		public V82.СправочникиСсылка.ГруппыЗаявокКандидатов ГруппаЗаявок {get;set;}//Группа кандидатов
		public DateTime ДатаОткрытия {get;set;}//Дата поступления кандидата
		public V82.СправочникиСсылка.ИсточникиИнформации ИсточникИнформации {get;set;}//Источник информации
		public V82.СправочникиСсылка.Вакансии Вакансия {get;set;}
		public object Подразделение {get;set;}
		public V82.СправочникиСсылка.Должности Должность {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		
		public ЗаявкиКандидатов()
		{
		}
		
		public ЗаявкиКандидатов(byte[] УникальныйИдентификатор)
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
					,_Fld2325RRef [ФизЛицо]
					,_Fld2326RRef [Состояние]
					,_Fld2327RRef [Важность]
					,_Fld2328 [Комментарий]
					,_Fld2329 [Закрыта]
					,_Fld2330 [РезультатЗакрытия]
					,_Fld2331RRef [ГруппаЗаявок]
					,_Fld2332 [ДатаОткрытия]
					,_Fld2333RRef [ИсточникИнформации]
					,_Fld2334RRef [Вакансия]
					,_Fld2335_TYPE [Подразделение_Тип],_Fld2335_RRRef [Подразделение],_Fld2335_RTRef [Подразделение_Вид]
					,_Fld2336RRef [Должность]
					,_Fld2337RRef [Организация]
					,_Fld2338RRef [Ответственный]
					From _Reference100(NOLOCK)
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
							ФизЛицо = new V82.СправочникиСсылка.ФизическиеЛица((byte[])Читалка.GetValue(6));
							Состояние = new V82.СправочникиСсылка.СостоянияЗаявокКандидатов((byte[])Читалка.GetValue(7));
							Важность = V82.Перечисления/*Ссылка*/.Важность.ПустаяСсылка.Получить((byte[])Читалка.GetValue(8));
							Комментарий = Читалка.GetString(9);
							Закрыта = ((byte[])Читалка.GetValue(10))[0]==1;
							РезультатЗакрытия = Читалка.GetString(11);
							ГруппаЗаявок = new V82.СправочникиСсылка.ГруппыЗаявокКандидатов((byte[])Читалка.GetValue(12));
							ДатаОткрытия = Читалка.GetDateTime(13);
							ИсточникИнформации = new V82.СправочникиСсылка.ИсточникиИнформации((byte[])Читалка.GetValue(14));
							Вакансия = new V82.СправочникиСсылка.Вакансии((byte[])Читалка.GetValue(15));
							Должность = new V82.СправочникиСсылка.Должности((byte[])Читалка.GetValue(19));
							Организация = new V82.СправочникиСсылка.Организации((byte[])Читалка.GetValue(20));
							Ответственный = new V82.СправочникиСсылка.Пользователи((byte[])Читалка.GetValue(21));
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
		
		public V82.СправочникиОбъект.ЗаявкиКандидатов  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ЗаявкиКандидатов();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ФизЛицо = ФизЛицо;
			Объект.Состояние = Состояние;
			Объект.Важность = Важность;
			Объект.Комментарий = Комментарий;
			Объект.Закрыта = Закрыта;
			Объект.РезультатЗакрытия = РезультатЗакрытия;
			Объект.ГруппаЗаявок = ГруппаЗаявок;
			Объект.ДатаОткрытия = ДатаОткрытия;
			Объект.ИсточникИнформации = ИсточникИнформации;
			Объект.Вакансия = Вакансия;
			Объект.Подразделение = Подразделение;
			Объект.Должность = Должность;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			return Объект;
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