Ext.define('Документы.ЗаявкаНаСертификациюНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявки на сертификацию номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:724px;height:280px;',
			height: 280,width: 724,
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
					text:'Организация',
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
					text:'Подразделение',
					width:'129',
				},
				{
					text:'Сертифицирующее подразделение',
					width:'129',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:740px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие14',
				},
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Действие4',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				{
					text:'Действие12',
				},
			]
		},
	]
});