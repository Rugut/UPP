Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Подписание',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:630px;height:499px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подписание исходных сообщений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:474px;width:630px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Подписать',
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
					text:'',
					width:'21',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Дата создания',
					width:'112',
				},
				{
					text:'Дата завершения',
					width:'112',
				},
				{
					text:'Первичное сообщение',
					width:'25',
				},
				{
					text:'Подтверждение отправки от почтового сервера',
					width:'25',
				},
				{
					text:'Подтверждение на подтверждение отправки',
					width:'25',
				},
				{
					text:'Подтверждение доставки документа в налоговый орган',
					width:'25',
				},
				{
					text:'Протокол входного контроля документа',
					width:'25',
				},
				{
					text:'Подтверждение на протокол входного контроля документа',
					width:'25',
				},
				{
					text:'',
					width:'25',
				},
				{
					text:'',
					width:'28',
				},
				{
					text:'',
					width:'28',
				},
				{
					text:'',
					width:'28',
				},
				{
					text:'Вид отчета',
					width:'120',
				},
				{
					text:'Период',
					width:'120',
				},
				{
					text:'Вид',
					width:'36',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Налоговый орган',
					width:'120',
				},
				{
					text:'Дата последнего сообщения',
					width:'112',
				},
				{
					text:'Тип цикла обмена',
					width:'120',
				},
				{
					text:'Вид услуги',
					width:'100',
				},
				{
					text:'Формат ответа',
					width:'100',
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
			xtype: 'label',
			name: 'НадписьСертификат',
			text: 'Сертификат:',
			style: 'position:absolute;left:8px;top:12px;width:71px;height:15px;',
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
					text:'',
				},
				'-',
				'-',
				{
					text:'Снять флажки',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Установить флажки',
				},
			]
		},
	]
});