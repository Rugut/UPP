Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаВводаПолномочий',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:863px;height:478px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Редактирование полномочий представителя',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'ОКАТО:',
			style: 'position:absolute;left:8px;top:10px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОКАТО',
			style: 'position:absolute;left:54px;top:10px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:163px;top:10px;width:26px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КПП',
			style: 'position:absolute;left:195px;top:10px;width:90px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:99px;width:847px;height:346px;',
			height: 346,width: 847,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоверенностиНалогоплательщика/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
					{
						name:'',
					},
					{
						name:'',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Области полномочий',
			style: 'position:absolute;left:8px;top:56px;width:847px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Полные полномочия',
			style: 'position:absolute;left:8px;top:35px;width:122px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Полномочия по списку',
			style: 'position:absolute;left:136px;top:35px;width:133px;height:15px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:453px;width:863px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:72px;width:847px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
	]
});