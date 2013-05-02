Ext.define('Обработки.ФормированиеСпискаРаботников.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:429px;height:404px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирование списка сотрудников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:379px;width:429px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаАктуальности',
			text: 'По состоянию на:',
			style: 'position:absolute;left:8px;top:8px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаАктуальности',
			style: 'position:absolute;left:173px;top:8px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:96px;width:413px;height:108px;',
			height: 108,width: 413,
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
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеСпискаРаботников/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:72px;width:413px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:204px;width:413px;height:167px;',
			height: 167,width: 413,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Премии сотрудников организаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:413px;height:121px;',
			height: 121,width: 413,
			columns:
			[
				{
					text:'Показатели для расчета',
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
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1',
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
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеСпискаРаботников/ВыбратьПоСсылке/100'},
				fields:
				[
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
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
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
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
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
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВводитьПоказатели',
			text: 'Введенные ниже показатели будут установлены всем сотрудникам',
			style: 'position:absolute;left:29px;top:22px;width:384px;height:21px;',
		},
					]
				},
				{
					title:'Разовые расчеты',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Вид расчета:',
			style: 'position:absolute;left:6px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойВидРасчета',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:180px;top:49px;width:17px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:200px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатыНачала',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:49px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:290px;top:49px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:93px;width:413px;height:74px;',
			height: 74,width: 413,
			columns:
			[
				{
					text:'Показатели для расчета',
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
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1',
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
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеСпискаРаботников/ВыбратьПоСсылке/100'},
				fields:
				[
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
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
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
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
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
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВводитьПоказатели1',
			text: 'Введенные ниже показатели будут установлены всем сотрудникам',
			style: 'position:absolute;left:29px;top:70px;width:384px;height:21px;',
		},
					]
				},
				{
					title:'Разовые расчеты для части смены',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатыНачала4',
			text: 'Дата:',
			style: 'position:absolute;left:6px;top:49px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала4',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплачиватьЧасов2',
			text: 'Оплатить часов:',
			style: 'position:absolute;left:6px;top:73px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОплачиватьЧасовНачисления',
			style: 'position:absolute;left:90px;top:73px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчетаВнутрисменныйНевыход1',
			text: 'Вид расчета:',
			style: 'position:absolute;left:6px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаВнутрисменный',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Разовые дополнительные начисления',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидРасчета1',
			text: 'Вид расчета:',
			style: 'position:absolute;left:6px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйВидРасчета',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'по:',
			style: 'position:absolute;left:179px;top:49px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания1',
			style: 'position:absolute;left:199px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатыНачала1',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:49px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала1',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВычета',
			style: 'position:absolute;left:90px;top:74px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодВычета',
			text: 'Код вычета:',
			style: 'position:absolute;left:6px;top:77px;width:84px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода1',
			text: '...',
			style: 'position:absolute;left:290px;top:49px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:120px;width:413px;height:47px;',
			height: 47,width: 413,
			columns:
			[
				{
					text:'Показатели для расчета',
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
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1',
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
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеСпискаРаботников/ВыбратьПоСсылке/100'},
				fields:
				[
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
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
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
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
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
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВводитьПоказатели2',
			text: 'Введенные ниже показатели будут установлены всем сотрудникам',
			style: 'position:absolute;left:29px;top:97px;width:384px;height:21px;',
		},
					]
				},
				{
					title:'Ввод процента деятельности ЕНВД',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодпадаетПодЕНВД',
			style: 'position:absolute;left:139px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодпадаетПодЕНВД',
			text: '% ЕНВД-деятельности:',
			style: 'position:absolute;left:6px;top:25px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДт',
			style: 'position:absolute;left:139px;top:49px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетДт',
			text: 'Счет Дт:',
			style: 'position:absolute;left:6px;top:49px;width:128px;height:19px;',
		},
					]
				},
				{
					title:'Невыходы в организациях для целой смены',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатыНачала2',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:49px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала2',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'по:',
			style: 'position:absolute;left:180px;top:49px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания2',
			style: 'position:absolute;left:200px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчетаЦелосменныйНевыход',
			text: 'Невыход:',
			style: 'position:absolute;left:6px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаЦелосменныйНевыход',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода2',
			text: '...',
			style: 'position:absolute;left:290px;top:49px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'Невыходы в организациях для части смены',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатыНачала3',
			text: 'Дата:',
			style: 'position:absolute;left:6px;top:49px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала3',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОплачиватьЧасов1',
			text: 'Часов:',
			style: 'position:absolute;left:6px;top:73px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОплачиватьЧасовНевыхода',
			style: 'position:absolute;left:90px;top:73px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчетаВнутрисменныйНевыход',
			text: 'Невыход:',
			style: 'position:absolute;left:6px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчетаВнутрисменныйНевыход',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Оплата сверхурочных часов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыхода',
			style: 'position:absolute;left:147px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыхода',
			text: 'Дата сверхурочных работ:',
			style: 'position:absolute;left:6px;top:25px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧасовПолуторных',
			style: 'position:absolute;left:147px;top:49px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧасовДвойных',
			style: 'position:absolute;left:147px;top:73px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЧасовПолуторных',
			text: 'Часы в 1.5-ом размере:',
			style: 'position:absolute;left:6px;top:49px;width:140px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьЧасовДвойных',
			text: 'Часы в 2-ом размере:',
			style: 'position:absolute;left:6px;top:73px;width:140px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Оплата праздничных и выходных дней организаций',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПраздника',
			style: 'position:absolute;left:166px;top:25px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтработаноЧасов',
			style: 'position:absolute;left:166px;top:49px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПраздника',
			text: 'Праздничный (выходной) день:',
			style: 'position:absolute;left:6px;top:25px;width:159px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтработаноЧасов',
			text: 'Отработано часов:',
			style: 'position:absolute;left:6px;top:49px;width:159px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Ввод способа отражения в регламентированном учете',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияВРЕглУчете',
			text: 'Бух. учет:',
			style: 'position:absolute;left:6px;top:51px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияВБухучете',
			style: 'position:absolute;left:109px;top:51px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаИзменения',
			text: 'Дата изменения:',
			style: 'position:absolute;left:6px;top:25px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения',
			style: 'position:absolute;left:109px;top:25px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеБлЗаСчетРаботодателя',
			text: 'Отражение б/л за счет работодателя:',
			style: 'position:absolute;left:6px;top:77px;width:101px;height:31px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияВБухучетеБольничногоЗаСчетРаботодателя',
			style: 'position:absolute;left:109px;top:77px;width:304px;height:19px;',
		},
					]
				},
				{
					title:'Ввод распределения основного заработка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:49px;width:413px;height:118px;',
			height: 118,width: 413,
			columns:
			[
				{
					text:'Бух. учет',
					width:'180',
					dataIndex:'СпособОтраженияВБухучете',
					flex:1,
				},
				{
					text:'% доли распределения',
					width:'98',
					dataIndex:'ДоляСпособаОтражения',
					flex:1,
				},
				{
					text:'ЕНВД',
					width:'43',
					dataIndex:'ПодпадаетПодЕНВД',
					flex:1,
				},
				{
					text:'Счет ДТ',
					width:'45',
					dataIndex:'СчетДт',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеСпискаРаботников/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'СпособОтраженияВБухучете',
					},
					{
						name:'ДоляСпособаОтражения',
					},
					{
						name:'ПодпадаетПодЕНВД',
					},
					{
						name:'СчетДт',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:25px;width:413px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
			]
		},
					]
				},
				{
					title:'Перенос задолженности',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодВозникновения',
			text: 'Месяц возникновения задолженности:',
			style: 'position:absolute;left:6px;top:25px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПериодВозникновения',
			style: 'position:absolute;left:207px;top:25px;width:206px;height:19px;',
		},
					]
				},
				{
					title:'Разовые удержания',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВидРасчета2',
			text: 'Вид расчета:',
			style: 'position:absolute;left:6px;top:25px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойВидРасчета1',
			style: 'position:absolute;left:90px;top:25px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'по:',
			style: 'position:absolute;left:180px;top:49px;width:17px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания3',
			style: 'position:absolute;left:200px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатыНачала5',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:49px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала5',
			style: 'position:absolute;left:90px;top:49px;width:85px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода3',
			text: '...',
			style: 'position:absolute;left:290px;top:49px;width:20px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:94px;width:413px;height:67px;',
			height: 67,width: 413,
			columns:
			[
				{
					text:'Показатели для расчета',
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
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта 1',
					width:'45',
					dataIndex:'Валюта1',
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
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеСпискаРаботников/ВыбратьПоСсылке/100'},
				fields:
				[
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
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'Валюта2',
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
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'Валюта4',
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
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Валюта6',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВводитьПоказатели3',
			text: 'Введенные ниже показатели будут установлены всем сотрудникам',
			style: 'position:absolute;left:29px;top:72px;width:384px;height:21px;',
		},
					]
				},
				{
					title:'Ввод распределения заработка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:413px;height:121px;',
			height: 121,width: 413,
			columns:
			[
				{
					text:'Упр. учет',
					width:'180',
					dataIndex:'СпособОтраженияВУпручете',
					flex:1,
				},
				{
					text:'% доли распределения',
					width:'98',
					dataIndex:'ДоляСпособаОтражения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеСпискаРаботников/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'СпособОтраженияВУпручете',
					},
					{
						name:'ДоляСпособаОтражения',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:22px;width:413px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
			]
		},
					]
				},
				{
					title:'Реестр ДСВ-3',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазмерВзносов',
			style: 'position:absolute;left:124px;top:36px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмерВзносов',
			text: 'Взносы работодателя:',
			style: 'position:absolute;left:6px;top:36px;width:117px;height:19px;',
		},
					]
				},
				{
					title:'Постоянные начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:29px;width:401px;height:132px;',
			height: 132,width: 401,
			columns:
			[
				{
					text:'Показатели для расчета',
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
					text:'Размер 1',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Валюта 1',
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
					text:'Тарифный разряд 1',
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
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеСпискаРаботников/ВыбратьПоСсылке/100'},
				fields:
				[
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
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВводитьПоказатели4',
			text: 'Введенные ниже показатели будут установлены всем сотрудникам',
			style: 'position:absolute;left:30px;top:6px;width:377px;height:21px;',
		},
					]
				},
				{
					title:'Кадровое перемещение организаций',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатыНачала6',
			text: 'Период с:',
			style: 'position:absolute;left:12px;top:30px;width:90px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала6',
			style: 'position:absolute;left:102px;top:30px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:192px;top:30px;width:15px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания4',
			style: 'position:absolute;left:212px;top:30px;width:85px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода4',
			text: '...',
			style: 'position:absolute;left:302px;top:30px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:102px;top:55px;width:195px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение:',
			style: 'position:absolute;left:12px;top:55px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Должность',
			style: 'position:absolute;left:102px;top:80px;width:195px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность',
			text: 'Должность:',
			style: 'position:absolute;left:12px;top:80px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикРаботы',
			style: 'position:absolute;left:102px;top:105px;width:195px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафикРаботы',
			text: 'График работы:',
			style: 'position:absolute;left:12px;top:105px;width:90px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:413px;height:19px;',
			height: 19,width: 413,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУволенных',
			style: 'position:absolute;left:165px;top:0px;width:120px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включать уволенных после:',
			style: 'position:absolute;left:0px;top:0px;width:162px;height:19px;',
		},
					]
				},
			]
		},
	]
});