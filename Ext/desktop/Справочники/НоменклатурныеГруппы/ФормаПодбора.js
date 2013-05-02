Ext.define('Справочники.НоменклатурныеГруппы.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:484px;height:444px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Номенклатурные группы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:468px;height:355px;',
			height: 355,width: 468,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НоменклатурныеГруппы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Количество',
			style: 'position:absolute;left:14px;top:417px;width:82px;height:19px;',
		},
	]
});