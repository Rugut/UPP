Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ШифрованиеРасшифровка',
	{
	extend: 'Ext.window.Window',
	height: 530,width: 704,
	iconCls: 'bogus',
	title: 'Шифрование и расшифровка сообщений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:505px;width:704px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:128px;width:688px;height:369px;',
			height: 369,width: 688,
			columns:
			[
				{
					text:'ПервичноеСообщение',
				},
				{
					text:'ПодтверждениеОтправки',
				},
				{
					text:'ОтветНаПодтверждениеОтправки',
				},
				{
					text:'ПодтверждениеДоставки',
				},
				{
					text:'ПротоколПроверки',
				},
				{
					text:'ПодтверждениеНаПротоколПроверки',
				},
				{
					text:'ОтветНаЗапрос',
				},
				{
					text:'ОтветНаОтветНаЗапрос',
				},
				{
					text:'Возврат',
				},
				{
					text:'ПодтверждениеВозврата',
				},
				{
					text:'Тип',
				},
				{
					text:'Наименование',
				},
				{
					text:'ДатаСоздания',
				},
				{
					text:'ДатаЗакрытия',
				},
				{
					text:'Организация',
				},
				{
					text:'НалоговыйОрган',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:142px;top:8px;width:554px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЦиклаОбмена',
			style: 'position:absolute;left:296px;top:57px;width:400px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:104px;width:688px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажкиУВсех',
				},
				{
					text:'СнятьФлажкиУВсех',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
			]
		},
	]
});