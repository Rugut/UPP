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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:453px;width:863px;height:25px;',
			items:
			[
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
			xtype: 'radio',
			boxLabel: 'Полномочия по списку',
			style: 'position:absolute;left:136px;top:35px;width:133px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Полные полномочия',
			style: 'position:absolute;left:8px;top:35px;width:122px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'ОКАТО:',
			style: 'position:absolute;left:8px;top:10px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			name: 'КПП',
			style: 'position:absolute;left:195px;top:10px;width:90px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:72px;width:847px;height:25px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:99px;width:847px;height:346px;',
			height: 346,width: 847,
			columns:
			[
				{
					text:'',
					width:'0',
				},
				{
					text:'',
					width:'0',
				},
				{
					text:'',
					width:'0',
				},
			]
		},
	]
});