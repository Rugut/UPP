Ext.define('Справочники.НастройкиОбменаДанными.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 411,width: 664,
	iconCls: 'bogus',
	title: 'Справочник Настройки обмена данными',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:648px;height:370px;',
			height: 370,width: 648,
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
					text:'ТипНастройки',
				},
				{
					text:'УзелИнформационнойБазы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});