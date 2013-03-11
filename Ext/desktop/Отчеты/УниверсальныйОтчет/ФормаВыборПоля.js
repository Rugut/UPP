Ext.define('Отчеты.УниверсальныйОтчет.ФормаВыборПоля',
	{
	extend: 'Ext.window.Window',
	height: 437,width: 400,
	iconCls: 'bogus',
	title: 'Выбор поля',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыОтмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:396px;',
			height: 396,width: 384,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'ПутьКДанным',
				},
				{
					text:'Значение',
				},
				{
					text:'ДетальнаяЗапись',
				},
				{
					text:'Поле',
				},
				{
					text:'Тип',
				},
			]
		},
	]
});