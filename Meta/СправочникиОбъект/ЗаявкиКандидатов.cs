
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ЗаявкиКандидатов:СправочникОбъект
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
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*100*/ Наименование {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.ФизическиеЛица ФизЛицо {get;set;}//Физическое лицо
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.СостоянияЗаявокКандидатов Состояние {get;set;}//Текущее состояние
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.Важность Важность {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Комментарий {get;set;}//Описание кандидата
		[DataMember]
		[ProtoMember(12)]
		public bool Закрыта {get;set;}//Работа по кандидату завершена
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ РезультатЗакрытия {get;set;}//Результат работы по кандидату
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ГруппыЗаявокКандидатов ГруппаЗаявок {get;set;}//Группа кандидатов
		[DataMember]
		[ProtoMember(15)]
		public DateTime ДатаОткрытия {get;set;}//Дата поступления кандидата
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.ИсточникиИнформации ИсточникИнформации {get;set;}//Источник информации
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.Вакансии Вакансия {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public object Подразделение {get;set;}
		[DataMember]
		[ProtoMember(19)]
		public V82.СправочникиСсылка.Должности Должность {get;set;}
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		[DataMember]
		[ProtoMember(21)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
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
						Insert Into _Reference19638(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld19741RRef
						,_Fld19742RRef
						,_Fld19743RRef
						,_Fld19744
						,_Fld19745
						,_Fld19746
						,_Fld19747RRef
						,_Fld19748
						,_Fld19749RRef
						,_Fld19750RRef
						,_Fld19752RRef
						,_Fld19753RRef
						,_Fld19754RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@ФизЛицо
						,@Состояние
						,@Важность
						,@Комментарий
						,@Закрыта
						,@РезультатЗакрытия
						,@ГруппаЗаявок
						,@ДатаОткрытия
						,@ИсточникИнформации
						,@Вакансия
						,@Должность
						,@Организация
						,@Ответственный)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference19638
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld19741RRef	= @ФизЛицо
						,_Fld19742RRef	= @Состояние
						,_Fld19743RRef	= @Важность
						,_Fld19744	= @Комментарий
						,_Fld19745	= @Закрыта
						,_Fld19746	= @РезультатЗакрытия
						,_Fld19747RRef	= @ГруппаЗаявок
						,_Fld19748	= @ДатаОткрытия
						,_Fld19749RRef	= @ИсточникИнформации
						,_Fld19750RRef	= @Вакансия
						,_Fld19752RRef	= @Должность
						,_Fld19753RRef	= @Организация
						,_Fld19754RRef	= @Ответственный
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ФизЛицо", ФизЛицо.Ссылка);
					Команда.Parameters.AddWithValue("Состояние", Состояние.Ссылка);
					Команда.Parameters.AddWithValue("Важность", Важность.Ключ());
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("Закрыта", Закрыта);
					Команда.Parameters.AddWithValue("РезультатЗакрытия", РезультатЗакрытия);
					Команда.Parameters.AddWithValue("ГруппаЗаявок", ГруппаЗаявок.Ссылка);
					Команда.Parameters.AddWithValue("ДатаОткрытия", ДатаОткрытия);
					Команда.Parameters.AddWithValue("ИсточникИнформации", ИсточникИнформации.Ссылка);
					Команда.Parameters.AddWithValue("Вакансия", Вакансия.Ссылка);
					Команда.Parameters.AddWithValue("Должность", Должность.Ссылка);
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("Ответственный", Ответственный.Ссылка);
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
					Команда.CommandText = @"Delete _Reference19638
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}