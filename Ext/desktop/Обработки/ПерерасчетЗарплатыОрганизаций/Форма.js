Ext.define('Обработки.ПерерасчетЗарплатыОрганизаций.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:380px;height:342px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перерасчет зарплаты организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:83px;top:33px;width:289px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:317px;width:380px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:83px;width:364px;height:226px;',
			height: 226,width: 364,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Документ',
					width:'291',
				},
				{
					text:'Месяц',
					width:'71',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:380px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Снять пометки физического лица',
				},
				'-',
				{
					text:'Перерассчитать',
				},
				'-',
				{
					text:'Отказаться от перерасчета',
				},
				'-',
				{
					text:'Перерассчитать текущим периодом',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьТекущийПериод',
			text: 'Текущий период регистрации документов:',
			style: 'position:absolute;left:8px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущийПериод',
			style: 'position:absolute;left:231px;top:58px;width:141px;height:19px;',
		},
	]
});