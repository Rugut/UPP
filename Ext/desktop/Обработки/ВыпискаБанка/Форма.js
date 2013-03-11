Ext.define('Обработки.ВыпискаБанка.Форма',
	{
	extend: 'Ext.window.Window',
	height: 432,width: 676,
	iconCls: 'bogus',
	title: 'Обработка  Выписка банка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:407px;width:676px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:32px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:106px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:106px;top:8px;width:96px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:123px;width:660px;height:180px;',
			height: 180,width: 660,
			columns:
			[
				{
					text:'ФлагОплачено',
				},
				{
					text:'Документ',
				},
				{
					text:'Контрагент',
				},
				{
					text:'СуммаПриход',
				},
				{
					text:'СуммаРасход',
				},
				{
					text:'ЧастичнаяОплата',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:99px;width:660px;height:24px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Действие4',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'УстановитьПометки',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаНачалоДня',
			style: 'position:absolute;left:548px;top:308px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПриходИтого',
			style: 'position:absolute;left:548px;top:332px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаРасходИтого',
			style: 'position:absolute;left:548px;top:356px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаКонецДня',
			style: 'position:absolute;left:548px;top:380px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:303px;width:124px;height:24px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'ЧастичнаяОплата',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
			]
		},
	]
});