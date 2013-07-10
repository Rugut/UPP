
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class Событие:ДокументОбъект
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
		public string/*(300)*/ АдресЭлектроннойПочты {get;set;}//Адрес электронной почты
		[DataMember]
		[ProtoMember(10)]
		public V82.Перечисления/*Ссылка*/.Важность Важность {get;set;}
		[DataMember]
		[ProtoMember(11)]
		public V82.Перечисления/*Ссылка*/.ВидыОбъектовСобытия ВидОбъекта {get;set;}//Вид объекта
		[DataMember]
		[ProtoMember(12)]
		public V82.Перечисления/*Ссылка*/.ВидыСобытий ВидСобытия {get;set;}//Вид события
		[DataMember]
		[ProtoMember(13)]
		public DateTime ВремяНапоминания {get;set;}//Время напоминания
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.ИсточникиИнформацииПриОбращенииПокупателей ИсточникИнформацииПриОбращении {get;set;}//Источник информации при обращении
		[DataMember]
		[ProtoMember(15)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public object КонтактноеЛицо {get;set;}//Контактное лицо
		[DataMember]
		[ProtoMember(17)]
		public object Контрагент {get;set;}
		[DataMember]
		[ProtoMember(18)]
		public bool НапомнитьОСобытии {get;set;}//Напомнить о событии
		[DataMember]
		[ProtoMember(19)]
		public DateTime НачалоСобытия {get;set;}//Начало события
		[DataMember]
		[ProtoMember(20)]
		public DateTime ОкончаниеСобытия {get;set;}//Окончание события
		[DataMember]
		[ProtoMember(21)]
		public string/*(200)*/ ОписаниеСобытия {get;set;}//Описание события
		[DataMember]
		[ProtoMember(22)]
		public object Основание {get;set;}
		[DataMember]
		[ProtoMember(23)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.Помещения Помещение {get;set;}
		[DataMember]
		[ProtoMember(25)]
		public V82.СправочникиСсылка.Проекты Проект {get;set;}
		[DataMember]
		[ProtoMember(26)]
		public string/*(0)*/ СодержаниеСобытия {get;set;}//Содержание события
		[DataMember]
		[ProtoMember(27)]
		public V82.Перечисления/*Ссылка*/.СостоянияСобытий СостояниеСобытия {get;set;}//Состояние события
		[DataMember]
		[ProtoMember(28)]
		public V82.СправочникиСсылка.Территории Территория {get;set;}
		[DataMember]
		[ProtoMember(29)]
		public V82.Перечисления/*Ссылка*/.ВходящееИсходящееСобытие ТипСобытия {get;set;}//Тип события
		[DataMember]
		[ProtoMember(30)]
		public V82.СправочникиСсылка.ГруппыСобытий ГруппаСобытия {get;set;}//Группа события
		[DataMember]
		[ProtoMember(31)]
		public bool ЕстьВложения {get;set;}//Есть вложения
		[DataMember]
		[ProtoMember(32)]
		public V82.СправочникиСсылка.КонтактныеЛица КонтактноеЛицоБезКонтрагента {get;set;}//Контактное лицо
		[DataMember]
		[ProtoMember(33)]
		public decimal/*(10)*/ ИнтервалНапоминания {get;set;}//Интервал напоминания
		[DataMember]
		[ProtoMember(34)]
		public string/*(50)*/ ПредметКонтакта {get;set;}//Предмет
		[DataMember]
		[ProtoMember(35)]
		public V82.СправочникиСсылка.ЗаявкиКандидатов ЗаявкаКандидата {get;set;}//Заявка кандидата
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
						Insert Into _Document452(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld11506
						,_Fld11507RRef
						,_Fld11508RRef
						,_Fld11509RRef
						,_Fld11510
						,_Fld11511RRef
						,_Fld11512
						,_Fld11515
						,_Fld11516
						,_Fld11517
						,_Fld11518
						,_Fld11520RRef
						,_Fld11521RRef
						,_Fld11522RRef
						,_Fld11523
						,_Fld11524RRef
						,_Fld11525RRef
						,_Fld11526RRef
						,_Fld11527RRef
						,_Fld11528
						,_Fld11529RRef
						,_Fld11530
						,_Fld11531
						,_Fld22251RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@АдресЭлектроннойПочты
						,@Важность
						,@ВидОбъекта
						,@ВидСобытия
						,@ВремяНапоминания
						,@ИсточникИнформацииПриОбращении
						,@Комментарий
						,@НапомнитьОСобытии
						,@НачалоСобытия
						,@ОкончаниеСобытия
						,@ОписаниеСобытия
						,@Ответственный
						,@Помещение
						,@Проект
						,@СодержаниеСобытия
						,@СостояниеСобытия
						,@Территория
						,@ТипСобытия
						,@ГруппаСобытия
						,@ЕстьВложения
						,@КонтактноеЛицоБезКонтрагента
						,@ИнтервалНапоминания
						,@ПредметКонтакта
						,@ЗаявкаКандидата)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document452
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld11506	= @АдресЭлектроннойПочты
						,_Fld11507RRef	= @Важность
						,_Fld11508RRef	= @ВидОбъекта
						,_Fld11509RRef	= @ВидСобытия
						,_Fld11510	= @ВремяНапоминания
						,_Fld11511RRef	= @ИсточникИнформацииПриОбращении
						,_Fld11512	= @Комментарий
						,_Fld11515	= @НапомнитьОСобытии
						,_Fld11516	= @НачалоСобытия
						,_Fld11517	= @ОкончаниеСобытия
						,_Fld11518	= @ОписаниеСобытия
						,_Fld11520RRef	= @Ответственный
						,_Fld11521RRef	= @Помещение
						,_Fld11522RRef	= @Проект
						,_Fld11523	= @СодержаниеСобытия
						,_Fld11524RRef	= @СостояниеСобытия
						,_Fld11525RRef	= @Территория
						,_Fld11526RRef	= @ТипСобытия
						,_Fld11527RRef	= @ГруппаСобытия
						,_Fld11528	= @ЕстьВложения
						,_Fld11529RRef	= @КонтактноеЛицоБезКонтрагента
						,_Fld11530	= @ИнтервалНапоминания
						,_Fld11531	= @ПредметКонтакта
						,_Fld22251RRef	= @ЗаявкаКандидата
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("АдресЭлектроннойПочты", АдресЭлектроннойПочты);
					Команда.Parameters.AddWithValue("Важность", Важность.Ключ());
					Команда.Parameters.AddWithValue("ВидОбъекта", ВидОбъекта.Ключ());
					Команда.Parameters.AddWithValue("ВидСобытия", ВидСобытия.Ключ());
					Команда.Parameters.AddWithValue("ВремяНапоминания", ВремяНапоминания);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("НапомнитьОСобытии", НапомнитьОСобытии);
					Команда.Parameters.AddWithValue("НачалоСобытия", НачалоСобытия);
					Команда.Parameters.AddWithValue("ОкончаниеСобытия", ОкончаниеСобытия);
					Команда.Parameters.AddWithValue("ОписаниеСобытия", ОписаниеСобытия);
					Команда.Parameters.AddWithValue("СодержаниеСобытия", СодержаниеСобытия);
					Команда.Parameters.AddWithValue("СостояниеСобытия", СостояниеСобытия.Ключ());
					Команда.Parameters.AddWithValue("ТипСобытия", ТипСобытия.Ключ());
					Команда.Parameters.AddWithValue("ЕстьВложения", ЕстьВложения);
					Команда.Parameters.AddWithValue("ИнтервалНапоминания", ИнтервалНапоминания);
					Команда.Parameters.AddWithValue("ПредметКонтакта", ПредметКонтакта);
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
					Команда.CommandText = @"Delete _Document452
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}