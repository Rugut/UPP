Ext.define('Документы.ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:573px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
				{
					text:'Списком сотрудников',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:548px;width:643px;height:25px;',
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
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:329px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:415px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:495px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:515px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:208px;width:627px;height:309px;',
			height: 309,width: 627,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:17px;width:627px;height:24px;',
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
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:41px;width:627px;height:262px;',
			height: 262,width: 627,
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
					width:'70',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'100',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Показатель',
					width:'125',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Установлен',
					width:'80',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Установлена валюта',
					width:'45',
					dataIndex:'Валюта1',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'125',
					dataIndex:'НаименованиеПоказательТР1',
					flex:1,
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'125',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Установлен',
					width:'80',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Установлена валюта',
					width:'45',
					dataIndex:'Валюта2',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'125',
					dataIndex:'НаименованиеПоказательТР2',
					flex:1,
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'125',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Установлен',
					width:'80',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Установлена валюта',
					width:'45',
					dataIndex:'Валюта3',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'125',
					dataIndex:'НаименованиеПоказательТР3',
					flex:1,
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'125',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Установлен',
					width:'80',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Установлена валюта',
					width:'45',
					dataIndex:'Валюта4',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'125',
					dataIndex:'НаименованиеПоказательТР4',
					flex:1,
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'125',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Установлен',
					width:'80',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Установлена валюта',
					width:'45',
					dataIndex:'Валюта5',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'125',
					dataIndex:'НаименованиеПоказательТР5',
					flex:1,
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'125',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Установлен',
					width:'80',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Установлена валюта',
					width:'45',
					dataIndex:'Валюта6',
					flex:1,
				},
				{
					text:'Показатель для ТР',
					width:'125',
					dataIndex:'НаименованиеПоказательТР6',
					flex:1,
				},
				{
					text:'Установлен тарифный разряд',
					width:'125',
					dataIndex:'ТарифныйРазряд6',
					flex:1,
				},
				{
					text:'Документ основание',
					width:'100',
					dataIndex:'ДокументОснование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации/ВыбратьПоСсылке/100'},
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
						name:'ДокументОснование',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:521px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:521px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:10px;top:83px;width:624px;height:119px;',
			height: 119,width: 624,
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
			name: 'ВидРасчета',
			style: 'position:absolute;left:296px;top:26px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействия',
			style: 'position:absolute;left:296px;top:72px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДействияКонец',
			style: 'position:absolute;left:420px;top:72px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала1',
			text: 'с:',
			style: 'position:absolute;left:282px;top:72px;width:11px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаДействияКонец',
			text: 'по:',
			style: 'position:absolute;left:397px;top:72px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внести или изменить начисление ',
			style: 'position:absolute;left:18px;top:25px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прекратить начисление',
			style: 'position:absolute;left:18px;top:48px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внести или изменить удержание ',
			style: 'position:absolute;left:18px;top:71px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прекратить удержание',
			style: 'position:absolute;left:18px;top:94px;width:221px;height:19px;',
		},
					]
				},
			]
		},
	]
});