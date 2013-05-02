Ext.define('Справочники.ДетализацияАналитическогоБаланса.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:406px;height:338px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Детализация аналитического баланса',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:179px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:275px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:317px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:313px;width:406px;height:25px;',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:121px;width:390px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:390px;height:160px;',
			height: 160,width: 390,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет',
					width:'80',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'Наименование счета',
					width:'120',
					dataIndex:'НаименованиеСчета',
					flex:1,
				},
				{
					text:'Вид остатка',
					width:'120',
					dataIndex:'ВидОстатка',
					flex:1,
				},
				{
					text:'Знак',
					width:'40',
					dataIndex:'Знак',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДетализацияАналитическогоБаланса/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Счет',
					},
					{
						name:'НаименованиеСчета',
					},
					{
						name:'ВидОстатка',
					},
					{
						name:'Знак',
					},
				]
			},
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:94px;top:57px;width:304px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеДляОтчета',
			text: 'Наименование для отчета:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:27px;text-align:left;',
		},
	]
});