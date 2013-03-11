Ext.define('Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 304,
	iconCls: 'bogus',
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
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});