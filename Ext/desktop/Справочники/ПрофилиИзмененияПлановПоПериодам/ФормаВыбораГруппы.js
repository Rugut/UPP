Ext.define('Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:304px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы профилей изменения планов по периодам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:288px;height:320px;',
			height: 320,width: 288,
			columns:
			[
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
			]
		},
	]
});