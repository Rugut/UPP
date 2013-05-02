Ext.define('Документы.УстановкаПорядкаЗакрытияПодразделений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:636px;height:346px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка порядка закрытия подразделений',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:321px;width:636px;height:25px;',
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
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:271px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:271px;width:533px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:294px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:294px;width:533px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:122px;width:619px;height:144px;',
			height: 144,width: 619,
			columns:
			[
				{
					text:'Порядок',
					width:'49',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'347',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Вид подразделения',
					width:'105',
					dataIndex:'ВидПодразделения',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаПорядкаЗакрытияПодразделений/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Подразделение',
					},
					{
						name:'ВидПодразделения',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:98px;width:619px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:328px;top:33px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:390px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'регл. учете',
			style: 'position:absolute;left:459px;top:33px;width:79px;height:19px;',
		},
	]
});