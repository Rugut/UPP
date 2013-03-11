Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормированиеПодтверждений',
	{
	extend: 'Ext.window.Window',
	height: 518,width: 742,
	iconCls: 'bogus',
	title: 'Формирование подтверждений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:493px;width:742px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Выполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:106px;width:726px;height:379px;',
			height: 379,width: 726,
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
			style: 'position:absolute;left:142px;top:8px;width:592px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЦиклаОбмена',
			style: 'position:absolute;left:296px;top:35px;width:438px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:82px;width:726px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьФлажкиУВсех',
				},
				{
					text:'СнятьФлажкиУВсех',
				},
				{
					text:'Обновить',
				},
			]
		},
	]
});