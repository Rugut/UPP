
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
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком:ДокументОбъект
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
		public V82.СправочникиСсылка.СотрудникиОрганизаций Сотрудник {get;set;}
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.ФизическиеЛица Физлицо {get;set;}//Физическое лицо
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(14)]
		public V82.ДокументыСсылка.ПриемНаРаботуВОрганизацию УдалитьПриказ {get;set;}//Удалить приказ
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаОкончанияПособияДоПолутораЛет {get;set;}//Дата окончания пособия до полутора лет
		[DataMember]
		[ProtoMember(16)]
		public DateTime ДатаОкончанияПособияДоТрехЛет {get;set;}//Дата окончания пособия до трех лет
		[DataMember]
		[ProtoMember(17)]
		public DateTime ДатаИзменения {get;set;}//Дата изменения
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(2)*/ КоличествоДетей {get;set;}//Количество детей
		[DataMember]
		[ProtoMember(19)]
		public decimal/*(1)*/ КоличествоПервыхДетей {get;set;}//Количество первых детей
		[DataMember]
		[ProtoMember(20)]
		public V82.ДокументыСсылка.ОтпускПоУходуЗаРебенком ДокументОснование {get;set;}//Документ основание
		[DataMember]
		[ProtoMember(21)]
		public V82.Перечисления/*Ссылка*/.ВидыДействияСНачислением Действие {get;set;}
		[DataMember]
		[ProtoMember(22)]
		public bool ВыплачиватьПособиеДоПолутораЛет {get;set;}//Выплачивать пособие до полутора лет
		[DataMember]
		[ProtoMember(23)]
		public bool ВыплачиватьПособиеДоТрехЛет {get;set;}//Выплачивать пособие до трех лет
		[DataMember]
		[ProtoMember(24)]
		public bool ОсвобождатьСтавку {get;set;}//Освобождать ставку
		[DataMember]
		[ProtoMember(25)]
		public bool ДанныеПрошлойВерсии {get;set;}//Перенесен из 7.7
		[DataMember]
		[ProtoMember(26)]
		public V82.ДокументыСсылка.ИзменениеУсловийОплатыОтпускаПоУходуЗаРебенком ИсправляемыйДокумент {get;set;}//Исправляемый документ
		[DataMember]
		[ProtoMember(27)]
		public ХранилищеЗначения ДвиженияИсправляемогоДокумента {get;set;}//Движения исправляемого документа
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
						Insert Into _Document18662(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld21445RRef
						,_Fld18669RRef
						,_Fld18666RRef
						,_Fld18667
						,_Fld18668RRef
						,_Fld18670RRef
						,_Fld18671
						,_Fld18672
						,_Fld18673
						,_Fld18674
						,_Fld18675
						,_Fld18676RRef
						,_Fld18677RRef
						,_Fld18678
						,_Fld18679
						,_Fld22995
						,_Fld26773
						,_Fld26774RRef
						,_Fld26775)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@Сотрудник
						,@Физлицо
						,@Организация
						,@Комментарий
						,@Ответственный
						,@УдалитьПриказ
						,@ДатаОкончанияПособияДоПолутораЛет
						,@ДатаОкончанияПособияДоТрехЛет
						,@ДатаИзменения
						,@КоличествоДетей
						,@КоличествоПервыхДетей
						,@ДокументОснование
						,@Действие
						,@ВыплачиватьПособиеДоПолутораЛет
						,@ВыплачиватьПособиеДоТрехЛет
						,@ОсвобождатьСтавку
						,@ДанныеПрошлойВерсии
						,@ИсправляемыйДокумент
						,@ДвиженияИсправляемогоДокумента)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document18662
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld21445RRef	= @Сотрудник
						,_Fld18669RRef	= @Физлицо
						,_Fld18666RRef	= @Организация
						,_Fld18667	= @Комментарий
						,_Fld18668RRef	= @Ответственный
						,_Fld18670RRef	= @УдалитьПриказ
						,_Fld18671	= @ДатаОкончанияПособияДоПолутораЛет
						,_Fld18672	= @ДатаОкончанияПособияДоТрехЛет
						,_Fld18673	= @ДатаИзменения
						,_Fld18674	= @КоличествоДетей
						,_Fld18675	= @КоличествоПервыхДетей
						,_Fld18676RRef	= @ДокументОснование
						,_Fld18677RRef	= @Действие
						,_Fld18678	= @ВыплачиватьПособиеДоПолутораЛет
						,_Fld18679	= @ВыплачиватьПособиеДоТрехЛет
						,_Fld22995	= @ОсвобождатьСтавку
						,_Fld26773	= @ДанныеПрошлойВерсии
						,_Fld26774RRef	= @ИсправляемыйДокумент
						,_Fld26775	= @ДвиженияИсправляемогоДокумента
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("УдалитьПриказ", УдалитьПриказ.Ссылка);
					Команда.Parameters.AddWithValue("ДатаОкончанияПособияДоПолутораЛет", ДатаОкончанияПособияДоПолутораЛет);
					Команда.Parameters.AddWithValue("ДатаОкончанияПособияДоТрехЛет", ДатаОкончанияПособияДоТрехЛет);
					Команда.Parameters.AddWithValue("ДатаИзменения", ДатаИзменения);
					Команда.Parameters.AddWithValue("КоличествоДетей", КоличествоДетей);
					Команда.Parameters.AddWithValue("КоличествоПервыхДетей", КоличествоПервыхДетей);
					Команда.Parameters.AddWithValue("ДокументОснование", ДокументОснование.Ссылка);
					Команда.Parameters.AddWithValue("Действие", Действие.Ключ());
					Команда.Parameters.AddWithValue("ВыплачиватьПособиеДоПолутораЛет", ВыплачиватьПособиеДоПолутораЛет);
					Команда.Parameters.AddWithValue("ВыплачиватьПособиеДоТрехЛет", ВыплачиватьПособиеДоТрехЛет);
					Команда.Parameters.AddWithValue("ОсвобождатьСтавку", ОсвобождатьСтавку);
					Команда.Parameters.AddWithValue("ДанныеПрошлойВерсии", ДанныеПрошлойВерсии);
					Команда.Parameters.AddWithValue("ИсправляемыйДокумент", ИсправляемыйДокумент.Ссылка);
					Команда.Parameters.AddWithValue("ДвиженияИсправляемогоДокумента",new byte[0]);
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
					Команда.CommandText = @"Delete _Document18662
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}