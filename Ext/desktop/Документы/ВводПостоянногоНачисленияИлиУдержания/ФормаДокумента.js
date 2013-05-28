Ext.define('Документы.ВводПостоянногоНачисленияИлиУдержания.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:578px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:95px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:177px;top:33px;width:17px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:195px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:526px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 540,
			height: 19,
			style: 'position:absolute;left:92px;top:526px;width:540px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:326px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:412px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:237px;width:624px;height:24px;',
			items:
			[
				{
					text:'Списком сотрудников',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:262px;width:624px;height:258px;',
			height: 258,width: 624,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводПостоянногоНачисленияИлиУдержания/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
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
		{
			xtype: 'fieldset',
			title: 'Сотрудники и показатели',
			style: 'position:absolute;left:8px;top:220px;width:624px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:624px;height:127px;',
			height: 127,width: 624,
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
			disabled: false,
			name: 'ВидРасчета',
			width: 220,
			height: 19,
			style: 'position:absolute;left:296px;top:32px;width:220px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДействия',
			width: 96,
			height: 19,
			style: 'position:absolute;left:296px;top:78px;width:96px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДействияКонец',
			width: 96,
			height: 19,
			style: 'position:absolute;left:420px;top:78px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'с:',
			style: 'position:absolute;left:282px;top:78px;width:11px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаДействияКонец',
			text: 'по:',
			style: 'position:absolute;left:397px;top:78px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Действие',
			style: 'position:absolute;left:0px;top:12px;width:221px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Вид расчета',
			style: 'position:absolute;left:265px;top:12px;width:221px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Период',
			style: 'position:absolute;left:265px;top:57px;width:221px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Внести или изменить начисление ',
			style: 'position:absolute;left:18px;top:31px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прекратить начисление',
			style: 'position:absolute;left:18px;top:54px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Внести или изменить удержание ',
			style: 'position:absolute;left:18px;top:77px;width:221px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прекратить удержание',
			style: 'position:absolute;left:18px;top:100px;width:221px;height:19px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:59px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Подразделение',
			width: 220,
			height: 19,
			style: 'position:absolute;left:95px;top:59px;width:220px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:553px;width:640px;height:25px;',
			dock: 'bottom',
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
	]
});