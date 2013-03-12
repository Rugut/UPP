Ext.define('Документы.СертификацияНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сертификации номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:280px;',
			height: 280,width: 764,
			columns:
			[
				{
					text:'',
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
					width:'120',
				},
				{
					text:'Результат сертификации',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Серия номенклатуры',
					width:'120',
				},
				{
					text:'Номер сертификата',
					width:'120',
				},
				{
					text:'Дата сертификата',
					width:'80',
				},
				{
					text:'Подразделение',
					width:'117',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Печать по умолчанию',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие13',
				},
			]
		},
	]
});