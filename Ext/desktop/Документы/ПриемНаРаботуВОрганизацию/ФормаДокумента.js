Ext.define('Документы.ПриемНаРаботуВОрганизацию.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:690px;height:482px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прием на работу в организацию',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:430px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:430px;width:586px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:268px;top:457px;width:422px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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
			name: 'Надпись2',
			text: 'Ответственный:',
			style: 'position:absolute;left:374px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:462px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:690px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:674px;height:300px;',
			height: 300,width: 674,
			items:
			[
				{
					title:'Сотрудники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:660px;height:250px;',
			height: 250,width: 660,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'120',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Должность',
					width:'120',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Ставка',
					width:'60',
					dataIndex:'ЗанимаемыхСтавок',
					flex:1,
				},
				{
					text:'Дата приема',
					width:'92',
					dataIndex:'ДатаПриема',
					flex:1,
				},
				{
					text:'По',
					width:'60',
					dataIndex:'ДатаУвольнения',
					flex:1,
				},
				{
					text:'Испытательный срок',
					width:'80',
					dataIndex:'ИспытательныйСрок',
					flex:1,
				},
				{
					text:'Условия приема на работу',
					width:'80',
					dataIndex:'УсловияПриемаНаРаботу',
					flex:1,
				},
				{
					text:'График работы',
					width:'120',
					dataIndex:'ГрафикРаботы',
					flex:1,
				},
				{
					text:'Сторно',
					width:'100',
					dataIndex:'Сторно',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПриемНаРаботуВОрганизацию/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'Должность',
					},
					{
						name:'ЗанимаемыхСтавок',
					},
					{
						name:'ДатаПриема',
					},
					{
						name:'ДатаУвольнения',
					},
					{
						name:'ИспытательныйСрок',
					},
					{
						name:'УсловияПриемаНаРаботу',
					},
					{
						name:'ГрафикРаботы',
					},
					{
						name:'Сторно',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:660px;height:24px;',
			items:
			[
				{
					text:'Сотрудниками',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:79px;top:161px;width:389px;height:24px;',
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
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
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
					title:'Начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:660px;height:250px;',
			height: 250,width: 660,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Вид расчета',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Показатели для расчета начисления',
					width:'205',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР1',
					flex:1,
				},
				{
					text:'Тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Валюта 2',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР2',
					flex:1,
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
					dataIndex:'ТарифныйРазряд2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Валюта 3',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР3',
					flex:1,
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
					dataIndex:'ТарифныйРазряд3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Валюта 4',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР4',
					flex:1,
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
					dataIndex:'ТарифныйРазряд4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Валюта 5',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР5',
					flex:1,
				},
				{
					text:'Тарифный разряд 5',
					width:'125',
					dataIndex:'ТарифныйРазряд5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'80',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Валюта 6',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'80',
					dataIndex:'НаименованиеПоказательТР6',
					flex:1,
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
					dataIndex:'ТарифныйРазряд6',
					flex:1,
				},
				{
					text:'Сторно',
					width:'100',
					dataIndex:'Сторно',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПриемНаРаботуВОрганизацию/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'Валюта1',
					},
					{
						name:'НаименованиеПоказательТР1',
					},
					{
						name:'ТарифныйРазряд1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
					},
					{
						name:'НаименованиеПоказательТР2',
					},
					{
						name:'ТарифныйРазряд2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'Валюта3',
					},
					{
						name:'НаименованиеПоказательТР3',
					},
					{
						name:'ТарифныйРазряд3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
					},
					{
						name:'НаименованиеПоказательТР4',
					},
					{
						name:'ТарифныйРазряд4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'Валюта5',
					},
					{
						name:'НаименованиеПоказательТР5',
					},
					{
						name:'ТарифныйРазряд5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
					{
						name:'НаименованиеПоказательТР6',
					},
					{
						name:'ТарифныйРазряд6',
					},
					{
						name:'Сторно',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:660px;height:24px;',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:18px;top:143px;width:389px;height:24px;',
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
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
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
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: '',
			style: 'position:absolute;left:30px;top:391px;width:439px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:469px;top:391px;width:83px;height:33px;',
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
			text: 'Открыть исправления',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:553px;top:391px;width:129px;height:33px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:457px;width:268px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отменить исправление',
				},
			]
		},
	]
});