Ext.define('Обработки.УдалениеПисемЭлектроннойПочты.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:682px;height:458px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Удаление писем электронной почты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				'-',
				'-',
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'Открыть',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:433px;width:682px;height:25px;',
			items:
			[
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:666px;height:236px;',
			height: 236,width: 666,
			columns:
			[
				{
					text:'N',
					width:'34',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Электронное письмо',
					width:'142',
				},
				{
					text:'Отправитель',
					width:'89',
				},
				{
					text:'Получатели',
					width:'96',
				},
				{
					text:'Дата создания',
					width:'98',
				},
				{
					text:'Дата отправления',
					width:'100',
				},
				{
					text:'Дата транспорта',
					width:'139',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:274px;width:666px;height:151px;',
			height: 151,width: 666,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Данные',
					width:'374',
				},
				{
					text:'Метаданные',
					width:'266',
				},
			]
		},
	]
});