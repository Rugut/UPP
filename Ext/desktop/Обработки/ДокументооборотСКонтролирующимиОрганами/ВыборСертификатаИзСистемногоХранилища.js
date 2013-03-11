Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ВыборСертификатаИзСистемногоХранилища',
	{
	extend: 'Ext.window.Window',
	height: 414,width: 745,
	iconCls: 'bogus',
	title: 'Цифровые сертификаты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:745px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Выбрать',
				},
				{
					text:'ПоказыватьПросроченные',
				},
				{
					text:'Спарвка',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:729px;height:269px;',
			height: 269,width: 729,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'ИмяВладельца',
				},
				{
					text:'Организация',
				},
				{
					text:'ИНН',
				},
				{
					text:'Должность',
				},
				{
					text:'ДействителенС',
				},
				{
					text:'ДействителенПо',
				},
				{
					text:'EMail',
				},
				{
					text:'Отпечаток',
				},
				{
					text:'ПригоденДляШифрования',
				},
				{
					text:'ПригоденДляПодписания',
				},
				{
					text:'Поставщик',
				},
				{
					text:'СерийныйНомер',
				},
				{
					text:'Наименование',
				},
				{
					text:'Владелец',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:729px;height:24px;',
			items:
			[
				{
					text:'СортироватьПоВозрастанию',
				},
				{
					text:'МножественныйВыбор',
				},
				{
					text:'СнятьВсеФлажки',
				},
				{
					text:'СортироватьПоУбыванию',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьВсеФлажки',
				},
				{
					text:'Открыть',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});