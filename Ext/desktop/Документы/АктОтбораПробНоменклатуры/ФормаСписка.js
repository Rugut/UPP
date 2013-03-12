Ext.define('Документы.АктОтбораПробНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Акты отбора проб номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:604px;height:280px;',
			height: 280,width: 604,
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
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Серия номенклатуры',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'161',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Печать по умолчанию',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
				},
				'-',
			]
		},
	]
});