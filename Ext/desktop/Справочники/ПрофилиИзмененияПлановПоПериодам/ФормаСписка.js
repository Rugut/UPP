Ext.define('Справочники.ПрофилиИзмененияПлановПоПериодам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 594,
	iconCls: 'bogus',
	title: 'Профили изменения планов по периодам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:412px;height:280px;',
			height: 280,width: 412,
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
					text:'ПериодСмещения',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:594px;height:25px;',
			items:
			[
			]
		},
	]
});