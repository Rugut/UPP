Ext.define('Документы.УстановкаДиапазоновБазовыхЦен.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 605,
	iconCls: 'bogus',
	title: 'Установка диапазонов базовых цен',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:589px;height:259px;',
			height: 259,width: 589,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:605px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
	]
});