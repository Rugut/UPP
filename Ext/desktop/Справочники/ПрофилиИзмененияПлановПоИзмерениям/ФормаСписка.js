Ext.define('Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 629,
	iconCls: 'bogus',
	title: 'Профили изменения планов по измерениям',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:447px;height:280px;',
			height: 280,width: 447,
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
					text:'ИзмерениеБюджетирования',
				},
				{
					text:'ИсточникДанных',
				},
				{
					text:'ПоказательИсточника',
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
			style: 'position:absolute;left:0px;top:0px;width:629px;height:25px;',
			items:
			[
			]
		},
	]
});