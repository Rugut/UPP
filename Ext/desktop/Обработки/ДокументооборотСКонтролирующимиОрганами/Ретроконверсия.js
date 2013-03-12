Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Ретроконверсия',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:465px;height:501px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ретроконверсия - параметры ответа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:476px;width:465px;height:25px;',
			items:
			[
				'-',
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Изучите сведения, присланные в исходном сообщении от ПФР, после чего подтвердите или опровергните их корректность.
Вы можете также подтвердить корректность только части сведений.',
			style: 'position:absolute;left:8px;top:84px;width:449px;height:42px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:449px;height:340px;',
			height: 340,width: 449,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:69px;width:449px;height:271px;',
			height: 271,width: 449,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:449px;height:24px;',
			items:
			[
				{
					text:'Установить флажки у всех',
				},
				'-',
				{
					text:'Снять флажки у всех',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:449px;height:247px;',
			height: 247,width: 449,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Файл сведений',
					width:'179',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Письмо, на которое создается ответ, содержит сведения для проведения ретроконверсии. Ретроконверсия - это процесс перевода ПФР ранее представленных вами сведений из бумажного вида в электронный.',
			style: 'position:absolute;left:8px;top:8px;width:449px;height:43px;',
		},
	]
});