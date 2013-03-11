Ext.define('Документы.ИнвентаризацияТоваровОтданныхНаКомиссию.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 740,
	iconCls: 'bogus',
	title: 'Инвентаризации товаров отданных на комиссию',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:724px;height:380px;',
			height: 380,width: 724,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Организация',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:740px;height:25px;',
			items:
			[
				{
					text:'ДействиеПечать',
				},
				{
					text:'Разделитель13',
				},
			]
		},
	]
});