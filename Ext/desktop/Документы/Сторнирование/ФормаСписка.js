Ext.define('Документы.Сторнирование.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:509px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сторнирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:493px;height:259px;',
			height: 259,width: 493,
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
					text:'Сторнируемый документ',
					width:'150',
				},
				{
					text:'Ответственный',
					width:'180',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:509px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
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
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие6',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие12',
				},
				'-',
			]
		},
	]
});