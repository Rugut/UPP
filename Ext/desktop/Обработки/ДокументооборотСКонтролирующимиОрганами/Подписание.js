Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Подписание',
	{
	extend: 'Ext.window.Window',
	height: 499,width: 630,
	iconCls: 'bogus',
	title: 'Подписание исходных сообщений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:474px;width:630px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыПодписать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:62px;width:614px;height:404px;',
			height: 404,width: 614,
			columns:
			[
				{
					text:'Пометка',
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
					text:'Отчет',
				},
				{
					text:'Период',
				},
				{
					text:'Вид',
				},
				{
					text:'Организация',
				},
				{
					text:'НалоговыйОрган',
				},
				{
					text:'ДатаПоследнегоСообщения',
				},
				{
					text:'Тип',
				},
				{
					text:'ВидУслуги',
				},
				{
					text:'ФорматОтвета',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сертификат',
			style: 'position:absolute;left:88px;top:10px;width:534px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:38px;width:614px;height:24px;',
			items:
			[
				{
					text:'Обновить',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Изменить',
				},
				{
					text:'Действие1',
				},
				{
					text:'УстановитьФлажки',
				},
			]
		},
	]
});