
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class РеестрСведенийВФССОЕжемесячныхПособияхПоУходу:ДокументОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///(Общ) Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public string/*(135)*/ НаименованиеТерриториальногоОрганаФСС {get;set;}//Наименование территориального органа ФСС
		[DataMember]
		[ProtoMember(13)]
		public string/*(14)*/ РегистрационныйНомерФСС {get;set;}//Регистрационный номер ФСС
		[DataMember]
		[ProtoMember(14)]
		public string/*(14)*/ ДополнительныйКодФСС {get;set;}//Дополнительный код ФСС
		[DataMember]
		[ProtoMember(15)]
		public string/*(5)*/ КодПодчиненностиФСС {get;set;}//Код подчиненности ФСС
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		[DataMember]
		[ProtoMember(18)]
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		[DataMember]
		[ProtoMember(19)]
		public string/*(12)*/ ИНН {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public string/*(9)*/ КПП {get;set;}
		[DataMember]
		[ProtoMember(21)]
		public string/*(15)*/ ОГРН {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public V82.СправочникиСсылка.ФизическиеЛица РеестрСоставил {get;set;}//Реестр составил
		[DataMember]
		[ProtoMember(23)]
		public string/*(30)*/ ТелефонСоставителя {get;set;}//Телефон составителя
		[DataMember]
		[ProtoMember(24)]
		public string/*(40)*/ АдресЭлектроннойПочтыСоставителя {get;set;}//Адрес электронной почты составителя
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.ФизическиеЛица ГлавныйБухгалтер {get;set;}//Главный бухгалтер
		[DataMember]
		[ProtoMember(26)]
		public bool ВыводитьПодписиВРеестрПособий {get;set;}//Выводить подписи в реестр пособий
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Document574(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld16297RRef
						,_Fld16298RRef
						,_Fld16299
						,_Fld16300
						,_Fld16301
						,_Fld16302
						,_Fld16303
						,_Fld16304RRef
						,_Fld16305RRef
						,_Fld16306
						,_Fld16307
						,_Fld16308
						,_Fld16309
						,_Fld16310RRef
						,_Fld16311
						,_Fld16312
						,_Fld16313RRef
						,_Fld16314)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Организация
						,@Ответственный
						,@Комментарий
						,@НаименованиеТерриториальногоОрганаФСС
						,@РегистрационныйНомерФСС
						,@ДополнительныйКодФСС
						,@КодПодчиненностиФСС
						,@Руководитель
						,@ДолжностьРуководителя
						,@КраткийСоставДокумента
						,@ИНН
						,@КПП
						,@ОГРН
						,@РеестрСоставил
						,@ТелефонСоставителя
						,@АдресЭлектроннойПочтыСоставителя
						,@ГлавныйБухгалтер
						,@ВыводитьПодписиВРеестрПособий)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document574
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld16297RRef	= @Организация
						,_Fld16298RRef	= @Ответственный
						,_Fld16299	= @Комментарий
						,_Fld16300	= @НаименованиеТерриториальногоОрганаФСС
						,_Fld16301	= @РегистрационныйНомерФСС
						,_Fld16302	= @ДополнительныйКодФСС
						,_Fld16303	= @КодПодчиненностиФСС
						,_Fld16304RRef	= @Руководитель
						,_Fld16305RRef	= @ДолжностьРуководителя
						,_Fld16306	= @КраткийСоставДокумента
						,_Fld16307	= @ИНН
						,_Fld16308	= @КПП
						,_Fld16309	= @ОГРН
						,_Fld16310RRef	= @РеестрСоставил
						,_Fld16311	= @ТелефонСоставителя
						,_Fld16312	= @АдресЭлектроннойПочтыСоставителя
						,_Fld16313RRef	= @ГлавныйБухгалтер
						,_Fld16314	= @ВыводитьПодписиВРеестрПособий
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("НаименованиеТерриториальногоОрганаФСС", НаименованиеТерриториальногоОрганаФСС);
					Команда.Parameters.AddWithValue("РегистрационныйНомерФСС", РегистрационныйНомерФСС);
					Команда.Parameters.AddWithValue("ДополнительныйКодФСС", ДополнительныйКодФСС);
					Команда.Parameters.AddWithValue("КодПодчиненностиФСС", КодПодчиненностиФСС);
					Команда.Parameters.AddWithValue("КраткийСоставДокумента", КраткийСоставДокумента);
					Команда.Parameters.AddWithValue("ИНН", ИНН);
					Команда.Parameters.AddWithValue("КПП", КПП);
					Команда.Parameters.AddWithValue("ОГРН", ОГРН);
					Команда.Parameters.AddWithValue("ТелефонСоставителя", ТелефонСоставителя);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочтыСоставителя", АдресЭлектроннойПочтыСоставителя);
					Команда.Parameters.AddWithValue("ВыводитьПодписиВРеестрПособий", ВыводитьПодписиВРеестрПособий);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Document574
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}