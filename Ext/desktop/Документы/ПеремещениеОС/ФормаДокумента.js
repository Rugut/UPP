Ext.define('Документы.ПеремещениеОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:665px;height:464px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перемещение ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:87px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:204px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:56px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:412px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:412px;width:561px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:389px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:389px;width:561px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Подразделение:',
			style: 'position:absolute;left:16px;top:99px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Подразделение',
			style: 'position:absolute;left:104px;top:99px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:429px;top:99px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'МОЛ:',
			style: 'position:absolute;left:16px;top:122px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МОЛ',
			style: 'position:absolute;left:104px;top:122px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МОЛОрганизации',
			style: 'position:absolute;left:429px;top:122px;width:228px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:209px;width:649px;height:175px;',
			height: 175,width: 649,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Инв. №',
					width:'87',
					dataIndex:'ИнвентарныйНомер',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'399',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПеремещениеОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ИнвентарныйНомер',
					},
					{
						name:'ОсновноеСредство',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:183px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:429px;top:33px;width:76px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:508px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:338px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Данные для управленческого учета:',
			style: 'position:absolute;left:8px;top:79px;width:319px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Основные средства:',
			style: 'position:absolute;left:8px;top:169px;width:649px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Подразделение:',
			style: 'position:absolute;left:338px;top:99px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'МОЛ:',
			style: 'position:absolute;left:338px;top:122px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Данные для бухгалтерского учета:',
			style: 'position:absolute;left:338px;top:79px;width:319px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:18px;top:145px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Событие',
			style: 'position:absolute;left:104px;top:145px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытиеРегл',
			text: 'Событие:',
			style: 'position:absolute;left:338px;top:145px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:429px;top:145px;width:228px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:184px;width:649px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'По наименованию',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:665px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				{
					text:'Открыть свойства',
				},
				{
					text:'Открыть категории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:439px;width:665px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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