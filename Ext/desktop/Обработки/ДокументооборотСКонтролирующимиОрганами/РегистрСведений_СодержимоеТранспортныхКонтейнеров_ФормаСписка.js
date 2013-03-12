Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_СодержимоеТранспортныхКонтейнеров_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:696px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список Содержимое транспортных контейнеров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:680px;height:259px;',
			height: 259,width: 680,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Транспортное сообщение',
					width:'159',
				},
				{
					text:'Имя файла',
					width:'229',
				},
				{
					text:'Тип',
					width:'100',
				},
				{
					text:'Размер (в байтах)',
					width:'144',
				},
				{
					text:'Тип файла отчетности ПФР',
					width:'100',
				},
				{
					text:'Статус проверки ЭЦП',
					width:'141',
				},
				{
					text:'Сертификат ключа подписи',
					width:'198',
				},
				{
					text:'Имя подписанного файла',
					width:'200',
				},
				{
					text:'Признак подписи абонента',
					width:'21',
				},
				{
					text:'Идентификатор',
					width:'224',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:696px;height:25px;',
			items:
			[
				{
					text:'Выгрузить',
				},
				'-',
			]
		},
	]
});