Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установки скидок номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:656px;height:380px;',
			height: 380,width: 656,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Вид операции',
					width:'100',
				},
				{
					text:'Информация',
					width:'100',
				},
				{
					text:'Условие',
					width:'242',
				},
				{
					text:'Значение условия',
					width:'132',
				},
				{
					text:'Ответственный',
					width:'196',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});