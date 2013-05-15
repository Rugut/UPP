Ext.define('Отчеты.МониторЭффективности.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:838px;height:538px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Монитор эффективности',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:525px;top:134px;width:306px;height:398px;',
			height: 398,width: 306,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:306px;height:372px;',
			height: 372,width: 306,
			items:
			[
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаТекДатаСтандартная',
			style: 'position:absolute;left:89px;top:32px;width:172px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Вариант даты:',
			style: 'position:absolute;left:8px;top:32px;width:78px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'позитивная',
			style: 'position:absolute;left:29px;top:264px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'стабильная',
			style: 'position:absolute;left:29px;top:285px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'негативная',
			style: 'position:absolute;left:29px;top:306px;width:82px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'хорошее',
			style: 'position:absolute;left:165px;top:264px;width:66px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'удовлетворительное',
			style: 'position:absolute;left:165px;top:285px;width:126px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'тревожное',
			style: 'position:absolute;left:165px;top:306px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'По динамике',
			style: 'position:absolute;left:8px;top:243px;width:73px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'По состоянию',
			style: 'position:absolute;left:144px;top:243px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичностьПоУмолчанию',
			text: 'Периодичность анализа:',
			style: 'position:absolute;left:8px;top:131px;width:129px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СмещениеПериодаПоУмолчанию',
			style: 'position:absolute;left:210px;top:155px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмещениеПериодаПоУмолчанию',
			text: 'Смещение предыдущего периода:',
			style: 'position:absolute;left:8px;top:155px;width:178px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Отбор по значению индикаторов:',
			style: 'position:absolute;left:8px;top:224px;width:202px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодичностьПоУмолчанию',
			style: 'position:absolute;left:150px;top:131px;width:114px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:5px;top:53px;width:295px;height:49px;',
			height: 49,width: 295,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Стандартная',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать выходные',
			style: 'position:absolute;left:5px;top:27px;width:129px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:131px;top:4px;width:125px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДнейДоТекущейДаты',
			text: 'Дней до текущей даты:',
			style: 'position:absolute;left:4px;top:4px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'Произвольная',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Текущая дата:',
			style: 'position:absolute;left:4px;top:4px;width:78px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаТекДатаПроизвольная',
			style: 'position:absolute;left:84px;top:4px;width:90px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Отображать индикаторы',
			style: 'position:absolute;left:8px;top:202px;width:145px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выделять цветом',
			style: 'position:absolute;left:160px;top:202px;width:114px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаФормирования',
			text: ' Дата формирования',
			style: 'position:absolute;left:8px;top:11px;width:289px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:292px;height:74px;',
			height: 74,width: 292,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Параметр',
					width:'100',
					dataIndex:'Параметр',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Параметр',
					width:'100',
					dataIndex:'ПараметрСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'50',
					dataIndex:'ЗначениеСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'50',
					dataIndex:'ДатаЗначениеСДатой',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МониторЭффективности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Параметр',
					},
					{
						name:'Значение',
					},
					{
						name:'ПараметрСДатой',
					},
					{
						name:'ЗначениеСДатой',
					},
					{
						name:'ДатаЗначениеСДатой',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
				]
			},
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:292px;height:119px;',
			height: 119,width: 292,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'44',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'33',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Значение',
					width:'44',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'44',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Представление',
					width:'44',
					dataIndex:'ПредставлениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Поле',
					width:'42',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'21',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Значение',
					width:'56',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлемента',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'120',
					dataIndex:'ТипДляПодробногоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Представление',
					width:'44',
					dataIndex:'ПредставлениеДляПодробногоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'120',
					dataIndex:'ТипДляКраткогоОтображенияГруппы',
					flex:1,
				},
				{
					text:'Поле',
					width:'44',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'33',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Значение',
					width:'44',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Применение',
					width:'36',
					dataIndex:'ПрименениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Представление',
					width:'41',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Поле',
					width:'44',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'34',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Значение',
					width:'42',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Применение',
					width:'33',
					dataIndex:'ПрименениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'120',
					dataIndex:'ТипДляПодробногоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Применение',
					width:'33',
					dataIndex:'ПрименениеДляПодробногоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Представление',
					width:'44',
					dataIndex:'ПредставлениеДляПодробногоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'120',
					dataIndex:'ТипДляКраткогоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Применение',
					width:'33',
					dataIndex:'ПрименениеДляКраткогоОтображенияГруппыЛокальногоОтбора',
					flex:1,
				},
				{
					text:'Поле',
					width:'44',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'33',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Значение',
					width:'44',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Режим отображения',
					width:'33',
					dataIndex:'РежимОтображенияДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Представление',
					width:'44',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					flex:1,
				},
				{
					text:'Тип группы',
					width:'120',
					dataIndex:'ТипДляПодробногоОтображенияГруппыГлавногоОтбора',
					flex:1,
				},
				{
					text:'Режим отображения',
					width:'33',
					dataIndex:'РежимОтображенияДляПодробногоОтображенияГруппыГлавногоОтбора',
					flex:1,
				},
				{
					text:'Представление',
					width:'44',
					dataIndex:'ПредставлениеДляПодробногоОтображенияГруппыГлавногоОтбора',
					flex:1,
				},
				{
					text:'Поле',
					width:'44',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'33',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'22',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'22',
					dataIndex:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Представление',
					width:'44',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Поле',
					width:'44',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'33',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'22',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'22',
					dataIndex:'ДатаПравоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					flex:1,
				},
				{
					text:'Поле',
					width:'44',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'33',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'22',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'22',
					dataIndex:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Применение',
					width:'33',
					dataIndex:'ПрименениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Представление',
					width:'44',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Поле',
					width:'44',
					dataIndex:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'33',
					dataIndex:'ВидыСравненияДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'22',
					dataIndex:'ПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'22',
					dataIndex:'ДатаПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Применение',
					width:'33',
					dataIndex:'ПрименениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Поле',
					width:'44',
					dataIndex:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Вид сравнения',
					width:'33',
					dataIndex:'ВидыСравненияДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Значение',
					width:'22',
					dataIndex:'ПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Дата',
					width:'22',
					dataIndex:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Режим отображения',
					width:'33',
					dataIndex:'РежимОтображенияДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
				{
					text:'Представление',
					width:'44',
					dataIndex:'ПредставлениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МониторЭффективности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлемента',
					},
					{
						name:'ПредставлениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлемента',
					},
					{
						name:'ТипДляПодробногоОтображенияГруппы',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияГруппы',
					},
					{
						name:'ТипДляКраткогоОтображенияГруппы',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПрименениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ПрименениеДляКраткогоОтображенияЭлементаЛокальногоОтбора',
					},
					{
						name:'ТипДляПодробногоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ПрименениеДляПодробногоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ТипДляКраткогоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ПрименениеДляКраткогоОтображенияГруппыЛокальногоОтбора',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'РежимОтображенияДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаГлавногоОтбора',
					},
					{
						name:'ТипДляПодробногоОтображенияГруппыГлавногоОтбора',
					},
					{
						name:'РежимОтображенияДляПодробногоОтображенияГруппыГлавногоОтбора',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияГруппыГлавногоОтбора',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаСДатой',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлементаСДатой',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляКраткогоОтображенияЭлементаСДатой',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПрименениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ЛевоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ВидыСравненияДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ПрименениеДляКраткогоОтображенияЭлементаЛокальногоОтбораСДатой',
					},
					{
						name:'ЛевоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'ВидыСравненияДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'ПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'ДатаПравоеЗначениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'РежимОтображенияДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
					{
						name:'ПредставлениеДляПодробногоОтображенияЭлементаГлавногоОтбораСДатой',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Индикаторы',
			style: 'position:absolute;left:8px;top:181px;width:289px;height:19px;',
		},
					]
				},
				{
					title:'Показатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:292px;height:136px;',
			height: 136,width: 292,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Поле',
					width:'249',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МониторЭффективности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Представление',
					},
					{
						name:'Поле',
					},
				]
			},
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:253px;height:83px;',
			height: 83,width: 253,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле сортировки',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Направление сортировки',
					width:'100',
					dataIndex:'ТипУпорядочивания',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МониторЭффективности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Поле',
					},
					{
						name:'ТипУпорядочивания',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:269px;top:22px;width:24px;height:52px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВыполняетсяПерерисовкаПанели',
			text: 'Выполняется перерисовка панели...',
			style: 'position:absolute;left:0px;top:42px;width:306px;height:36px;text-align:center;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:306px;height:26px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Показать сформированный отчет в отдельном окне',
				},
				'-',
				{
					text:'Сохранить сформированный отчет для сравнения',
				},
				{
					text:'Сравнить сформированный отчет с сохраненным',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:838px;height:57px;',
			height: 57,width: 838,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:101px;top:0px;width:220px;height:25px;',
			items:
			[
				{
					text:'Настройка структуры',
				},
				{
					text:'Панель пользователя',
				},
				{
					text:'Описание и Пользователи',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:86px;top:0px;width:2px;height:56px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'Сформировать',
			text: 'Сформировать',
			style: 'position:absolute;left:6px;top:98px;width:124px;height:30px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:9px;top:63px;width:821px;height:31px;',
			height: 31,width: 821,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Горизонтальные отборы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:136px;top:101px;width:120px;height:24px;',
			items:
			[
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:658px;top:101px;width:173px;height:24px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Командная панель панель вариантов',
				},
				{
					text:'Настройки',
				},
				{
					text:'Справка',
				},
			]
		},
	],
	dockedItems:
	[
	]
});