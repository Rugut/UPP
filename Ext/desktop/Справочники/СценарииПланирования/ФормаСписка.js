Ext.define('Справочники.СценарииПланирования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 775,
	iconCls: 'bogus',
	title: 'Сценарии планирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:593px;height:320px;',
			height: 320,width: 593,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Периодичность',
				},
				{
					text:'ОбъектПланирования',
				},
				{
					text:'УчетПоСуммам',
				},
				{
					text:'УчетПоКоличеству',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:775px;height:25px;',
			items:
			[
			]
		},
	]
});