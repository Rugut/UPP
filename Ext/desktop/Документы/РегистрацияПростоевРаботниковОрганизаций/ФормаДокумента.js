Ext.define('Документы.РегистрацияПростоевРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:686px;height:558px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регистрация простоев в организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:504px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:524px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:203px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:506px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:506px;width:584px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:686px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:236px;top:533px;width:450px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:8px;top:57px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:113px;width:670px;height:346px;',
			height: 346,width: 670,
			items:
			[
				{
					title:'Условия',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Вид простоя:',
			style: 'position:absolute;left:6px;top:6px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:81px;top:6px;width:365px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Целодневный (целосменный) с:',
			style: 'position:absolute;left:26px;top:97px;width:184px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внутрисменный',
			style: 'position:absolute;left:26px;top:121px;width:103px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:212px;top:97px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:327px;top:97px;width:16px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:346px;top:97px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаВнутрисменная',
			style: 'position:absolute;left:212px;top:121px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплачиватьЧасов',
			text: 'часы:',
			style: 'position:absolute;left:314px;top:121px;width:29px;height:19px;text-align:right;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОплачиватьЧасов',
			style: 'position:absolute;left:346px;top:121px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчета2',
			text: 'Дата:',
			style: 'position:absolute;left:158px;top:121px;width:52px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачалаСобытия',
			text: 'Дата начала периода простоя:',
			style: 'position:absolute;left:6px;top:30px;width:162px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаСобытия',
			style: 'position:absolute;left:168px;top:30px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособВводаВремени',
			text: 'Период оплачиваемого времени',
			style: 'position:absolute;left:6px;top:72px;width:207px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьВсе',
			text: '',
			style: 'position:absolute;left:6px;top:237px;width:82px;height:71px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмер',
			text: 'Начислено:',
			style: 'position:absolute;left:100px;top:237px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеРазмер',
			text: '',
			style: 'position:absolute;left:100px;top:252px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьРазмер',
			text: '',
			style: 'position:absolute;left:100px;top:268px;width:181px;height:52px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднийЗаработок',
			text: 'Средний дневной заработок:',
			style: 'position:absolute;left:295px;top:237px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:295px;top:252px;width:181px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:295px;top:268px;width:181px;height:52px;',
		},
		{
			xtype: 'label',
			name: 'ЗаголовокДополнительнойИнформационнойНадписи',
			text: 'Заголовок:',
			style: 'position:absolute;left:490px;top:237px;width:172px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДополнительнаяИнформационнаяНадпись',
			text: '',
			style: 'position:absolute;left:490px;top:252px;width:172px;height:68px;',
		},
					]
				},
				{
					title:'Оплата',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:656px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:656px;height:252px;',
			height: 252,width: 656,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'',
					width:'28',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата окончания',
					width:'80',
				},
				{
					text:'Начисление',
					width:'100',
				},
				{
					text:'Показатели для расчета',
					width:'133',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 2',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 3',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 4',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 5',
					width:'50',
				},
				{
					text:'Показатель',
					width:'83',
				},
				{
					text:'Размер 6',
					width:'50',
				},
				{
					text:'Результат',
					width:'64',
				},
				{
					text:'Дней отработано',
					width:'56',
				},
				{
					text:'Часов отработано',
					width:'56',
				},
				{
					text:'Оплачено дней/часов',
					width:'80',
				},
				{
					text:'Подразделение организации',
					width:'73',
				},
				{
					text:'Сторно',
					width:'44',
				},
				{
					text:'Зачесть в норму дней',
					width:'80',
				},
				{
					text:'Зачесть в норму часов',
					width:'80',
				},
				{
					text:'Норма по пятидневке',
					width:'96',
				},
				{
					text:'Отработано по пятидневке',
					width:'96',
				},
				{
					text:'Начало расчетного периода',
					width:'83',
				},
				{
					text:'Окончание расчетного периода',
					width:'83',
				},
				{
					text:'Норма часов по пятидневке',
					width:'100',
				},
				{
					text:'Отработано часов по пятидневке',
					width:'100',
				},
				{
					text:'Дата начала события',
					width:'100',
				},
				{
					text:'Сторнируемый документ',
					width:'100',
				},
				{
					text:'Число месяцев',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:67px;width:656px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
					]
				},
				{
					title:'Расчет среднего заработка',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:73px;width:656px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:97px;width:656px;height:176px;',
			height: 176,width: 656,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Вид заработка',
					width:'100',
				},
				{
					text:'Сумма',
					width:'100',
				},
				{
					text:'Дней отработано',
					width:'100',
				},
				{
					text:'Часов отработано',
					width:'100',
				},
				{
					text:'Отработано по пятидневке',
					width:'100',
				},
				{
					text:'Норма по пятидневке',
					width:'100',
				},
				{
					text:'Дата начала',
					width:'100',
				},
				{
					text:'Дата окончания',
					width:'100',
				},
				{
					text:'Коэффициент индексации',
					width:'61',
				},
				{
					text:'Число месяцев',
					width:'100',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:42px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:160px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаНачало',
			text: 'С:',
			style: 'position:absolute;left:26px;top:24px;width:15px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по:',
			style: 'position:absolute;left:137px;top:24px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:255px;top:24px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработка',
			text: 'Расчетный период',
			style: 'position:absolute;left:6px;top:5px;width:215px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаЗаработок',
			text: 'Заработок за расчетный период',
			style: 'position:absolute;left:6px;top:52px;width:215px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНачисления',
			text: 'Рассчитать начисления',
			style: 'position:absolute;left:6px;top:281px;width:130px;height:39px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:81px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:81px;width:203px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:533px;width:236px;height:25px;',
			items:
			[
				{
					text:'Исправить',
				},
				{
					text:'Отменить исправление',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:31px;top:468px;width:434px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:466px;top:468px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправление',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:549px;top:468px;width:129px;height:33px;',
			height: 33,width: 129,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
	]
});